'use strict';
const mockData = require('../data/mockData.json');

/**
 * Liste tous les clients du magasin
 *
 * returns List
 **/
exports.clientsGET = function () {
  return new Promise(function (resolve, reject) {
    resolve(mockData.magasin.clients);
  });
};

/**
 * Supprime un client spécifié par son id
 *
 * idClient Integer L'id du client à supprimer
 * no response value expected for this operation
 **/
exports.clientsIdClientDELETE = function (idClient) {
  return new Promise(function (resolve, reject) {
    const index = mockData.magasin.clients.findIndex(c => c.idClient === idClient);
    if (index !== -1) {
      mockData.magasin.clients.splice(index, 1);
      resolve({ result: 'ok' });
    } else {
      reject({ status: 404, message: 'Client non trouvé' });
    }
  });
};

/**
 * Retourne un client spécifié par son id
 *
 * idClient Integer L'id du client à récupérer
 * returns Client
 **/
exports.clientsIdClientGET = function (idClient) {
  return new Promise(function (resolve, reject) {
    const client = mockData.magasin.clients.find(c => c.idClient === idClient);

    if (client) {
      resolve(client);
    } else {
      reject({ status: 404, message: 'Client non trouvé' });
    }
  });
};

/**
 * Retourne la location associée à un client spécifié par son id
 *
 * idClient Integer L'id du client
 * returns Location
 **/
exports.clientsIdClientLocationGET = function (idClient) {
  return new Promise(function (resolve, reject) {
    const locations = mockData.magasin.locations.filter(l => l.clientAssocie === idClient);

    if (locations.length > 0) {
      resolve(locations);
    } else {
      reject({
        status: 404,
        message: 'Aucune location trouvée pour ce client',
      });
    }
  });
};

/**
 * Met à jour les informations d'un client spécifié par son id
 *
 * body Client  (optional)
 * idClient Integer L'id du client à mettre à jour
 * no response value expected for this operation
 **/
exports.clientsIdClientPUT = function (body, idClient) {
  return new Promise(function (resolve, reject) {
    const index = mockData.magasin.clients.findIndex(c => c.idClient === idClient);

    if (index !== -1) {
      const updatedClient = { ...mockData.magasin.clients[index], ...body };
      if (body.idClient && body.idClient !== idClient) {
        const isIdUnique = mockData.magasin.clients.every(c => c.idClient !== body.idClient);
        if (!isIdUnique) {
          reject({ status: 400, message: "L'ID du client doit être unique" });
          return;
        }
      }

      mockData.magasin.clients[index] = updatedClient;
      resolve(updatedClient);
    } else {
      reject({ status: 404, message: 'Client non trouvé' });
    }
  });
};

/**
 * Ajoute un nouveau client
 *
 * body Client  (optional)
 * no response value expected for this operation
 **/
exports.clientsPOST = function (body) {
  return new Promise(function (resolve, reject) {
    const existingClient = mockData.magasin.clients.find(c => c.idClient === body.idClient);
    if (existingClient) {
      reject({ status: 400, message: "L'ID du client doit être unique" });
      return;
    }
    const newClient = body;
    mockData.magasin.clients.push(newClient);
    resolve(newClient);
  });
};
