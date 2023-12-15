'use strict';

const utils = require('../utils/writer.js');
const Categorie = require('../service/CategorieService');

module.exports.categoriesGET = function categoriesGET (req, res, next) {
  Categorie.categoriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesIdCategorieDELETE = function categoriesIdCategorieDELETE (req, res, next, idCategorie) {
  Categorie.categoriesIdCategorieDELETE(idCategorie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesIdCategorieGET = function categoriesIdCategorieGET (req, res, next, idCategorie) {
  Categorie.categoriesIdCategorieGET(idCategorie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesIdCategoriePUT = function categoriesIdCategoriePUT (req, res, next, body, idCategorie) {
  Categorie.categoriesIdCategoriePUT(body, idCategorie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesIdCategorieProduitsGET = function categoriesIdCategorieProduitsGET (req, res, next, idCategorie) {
  Categorie.categoriesIdCategorieProduitsGET(idCategorie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesPOST = function categoriesPOST (req, res, next, body) {
  Categorie.categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
