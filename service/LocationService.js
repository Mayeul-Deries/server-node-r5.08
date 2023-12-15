'use strict';
const mockData = require('../data/mockData.json');

/**
 * Liste toutes les locations enregistrées
 *
 * returns List
 **/
exports.locationsGET = function () {
  return new Promise(function (resolve, reject) {
    resolve(mockData.magasin.locations);
  });
};

/**
 * Retourne le client associé à une location spécifiée par son id
 *
 * idLocation Integer L'id de la location
 * returns Client
 **/
exports.locationsIdLocationClientGET = function (idLocation) {
  return new Promise(function (resolve, reject) {
    const location = mockData.magasin.locations.find(l => l.idLocation === idLocation);

    if (location) {
      const client = mockData.magasin.clients.find(c => c.idClient === location.clientAssocie);
      if (client) {
        resolve(client);
      } else {
        reject({ status: 404, message: 'Client non trouvé pour la location' });
      }
    } else {
      reject({ status: 404, message: 'Location non trouvée' });
    }
  });
};

/**
 * Supprime une location spécifiée par son id
 *
 * idLocation Integer L'id de la location à supprimer
 * no response value expected for this operation
 **/
exports.locationsIdLocationDELETE = function (idLocation) {
  return new Promise(function (resolve, reject) {
    const index = mockData.magasin.locations.findIndex(l => l.idLocation === idLocation);
    if (index !== -1) {
      mockData.magasin.locations.splice(index, 1);
      resolve({ result: 'ok' });
    } else {
      reject({ status: 404, message: 'Location non trouvée' });
    }
  });
};

/**
 * Retourne les détails d'une location spécifiée par son id
 *
 * idLocation Integer L'id de la location à afficher
 * returns Location
 **/
exports.locationsIdLocationGET = function (idLocation) {
  return new Promise(function (resolve, reject) {
    const location = mockData.magasin.locations.find(l => l.idLocation === idLocation);

    if (location) {
      resolve(location);
    } else {
      reject({ status: 404, message: 'Location non trouvée' });
    }
  });
};

/**
 * Met à jour les informations d'une location spécifiée par son id
 *
 * body Location  (optional)
 * idLocation Integer L'id de la location à mettre à jour
 * no response value expected for this operation
 **/
exports.locationsIdLocationPUT = function (body, idLocation) {
  return new Promise(function (resolve, reject) {
    const index = mockData.magasin.locations.findIndex(l => l.idLocation === idLocation);

    if (index !== -1) {
      const editLocation = { ...mockData.magasin.locations[index], ...body };

      if (body.idLocation && body.idLocation !== idLocation) {
        const isIdUnique = mockData.magasin.locations.every(l => l.idLocation !== body.idLocation);
        if (!isIdUnique) {
          reject({
            status: 400,
            message: "L'ID de la location doit être unique",
          });
          return;
        }
      }

      mockData.magasin.locations[index] = editLocation;
      resolve(editLocation);
    } else {
      reject({ status: 404, message: 'Location non trouvée' });
    }
  });
};

/**
 * Liste les produits loués pour une location spécifiée par son id
 *
 * idLocation Integer L'id de la location dont on veut afficher les produits
 * returns List
 **/
exports.locationsIdLocationProduitsGET = function (idLocation) {
  return new Promise(function (resolve, reject) {
    const location = mockData.magasin.locations.find(l => l.idLocation === idLocation);

    if (location) {
      const produitsLoues = location.produitLoue.map(productId => {
        return mockData.magasin.produits.find(p => p.idProduit === productId);
      });
      resolve(produitsLoues);
    } else {
      reject({ status: 404, message: 'Location non trouvée' });
    }
  });
};

/**
 * Enregistre une nouvelle location
 *
 * body Location  (optional)
 * no response value expected for this operation
 **/
exports.locationsPOST = function (body) {
  return new Promise(function (resolve, reject) {
    const newLocation = body;
    const existingLocation = mockData.magasin.locations.find(l => l.idLocation === newLocation.idLocation);

    if (existingLocation) {
      reject({ status: 400, message: "L'ID de la location doit être unique" });
    } else {
      mockData.magasin.locations.push(newLocation);
      resolve(newLocation);
    }
  });
};
