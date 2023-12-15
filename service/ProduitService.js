'use strict';
const mockData = require('../data/mockData.json');

/**
 * Liste tous les produits du magasin
 *
 * limit Integer Nombre maximum d'éléments à retourner. (optional)
 * returns List
 **/
exports.produitsGET = function (limit) {
  return new Promise(function (resolve, reject) {
    let produits = mockData.magasin.produits;

    if (limit && Number.isInteger(limit)) {
      produits = produits.slice(0, limit);
    } else {
      produits = produits.slice(0, 20);
    }
    resolve(produits);
  });
};

/**
 * Retourne la catégorie d'un produit en fonction de l'id du produit
 *
 * idProduit Integer L'id du produit
 * returns Categorie
 **/
exports.produitsIdProduitCategorieGET = function (idProduit) {
  return new Promise(function (resolve, reject) {
    const produit = mockData.magasin.produits.find(p => p.idProduit === idProduit);

    if (produit) {
      const categorie = mockData.magasin.categories.find(c => c.idCategorie === produit.categorie);
      if (categorie) {
        resolve(categorie);
      } else {
        reject({ status: 404, message: 'Catégorie non trouvée pour le produit' });
      }
    } else {
      reject({ status: 404, message: 'Produit non trouvé' });
    }
  });
};

/**
 * Supprime un produit spécifié par son id du magasin
 *
 * idProduit Integer L'id du produit à supprimer
 * no response value expected for this operation
 **/
exports.produitsIdProduitDELETE = function (idProduit) {
  return new Promise(function (resolve, reject) {
    const index = mockData.magasin.produits.findIndex(p => p.idProduit === idProduit);
    if (index !== -1) {
      mockData.magasin.produits.splice(index, 1);
      resolve({ result: 'ok' });
    } else {
      reject({ status: 404, message: 'Produit non trouvé' });
    }
  });
};

/**
 * Retourne un produit en fonction de l'id du produit
 *
 * idProduit Integer L'id du produit
 * returns Produit
 **/
exports.produitsIdProduitGET = function (idProduit) {
  return new Promise(function (resolve, reject) {
    const produit = mockData.magasin.produits.find(p => p.idProduit === idProduit);

    if (produit) {
      resolve(produit);
    } else {
      reject({ status: 404, message: 'Produit non trouvé' });
    }
  });
};

/**
 * Met à jour les informations d'un produit spécifié par son id
 *
 * body Produit  (optional)
 * idProduit Integer L'id du produit à mettre à jour
 * no response value expected for this operation
 **/
exports.produitsIdProduitPUT = function (body, idProduit) {
  return new Promise(function (resolve, reject) {
    const index = mockData.magasin.produits.findIndex(p => p.idProduit === idProduit);

    if (index !== -1) {
      if (body.idProduit && body.idProduit !== idProduit) {
        const isIdUnique = mockData.magasin.produits.every(p => p.idProduit !== body.idProduit);
        if (!isIdUnique) {
          reject({ status: 400, message: "L'ID du produit doit être unique" });
          return;
        }
      }
      const editProduit = { ...mockData.magasin.produits[index], ...body };
      mockData.magasin.produits[index] = editProduit;
      resolve(editProduit);
    } else {
      reject({ status: 404, message: 'Produit non trouvé' });
    }
  });
};

/**
 * Ajoute un nouveau produit au magasin
 *
 * body Produit  (optional)
 * no response value expected for this operation
 **/
exports.produitsPOST = function (body) {
  return new Promise(function (resolve, reject) {
    const existingProduit = mockData.magasin.produits.find(p => p.idProduit === body.idProduit);
    if (existingProduit) {
      reject({ status: 404, message: "L'ID du produit doit être unique" });
      return;
    }
    const newProduct = body;

    mockData.magasin.produits.push(newProduct);
    resolve(newProduct);
  });
};
