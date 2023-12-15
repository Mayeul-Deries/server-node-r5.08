'use strict';

const utils = require('../utils/writer.js');
const Produit = require('../service/ProduitService');

module.exports.produitsGET = function produitsGET (req, res, next, limit) {
  Produit.produitsGET(limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.produitsIdProduitCategorieGET = function produitsIdProduitCategorieGET (req, res, next, idProduit) {
  Produit.produitsIdProduitCategorieGET(idProduit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.produitsIdProduitDELETE = function produitsIdProduitDELETE (req, res, next, idProduit) {
  Produit.produitsIdProduitDELETE(idProduit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.produitsIdProduitGET = function produitsIdProduitGET (req, res, next, idProduit) {
  Produit.produitsIdProduitGET(idProduit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.produitsIdProduitPUT = function produitsIdProduitPUT (req, res, next, body, idProduit) {
  Produit.produitsIdProduitPUT(body, idProduit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.produitsPOST = function produitsPOST (req, res, next, body) {
  Produit.produitsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
