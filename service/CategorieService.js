'use strict';
const mockData = require('../data/mockData.json');

/**
 * Liste toutes les catégories de produits du magasin
 *
 * returns List
 **/
exports.categoriesGET = function () {
  return new Promise(function (resolve, reject) {
    resolve(mockData.magasin.categories);
  });
};

/**
 * Supprime une catégorie spécifiée par son id
 *
 * idCategorie Integer L'id de la catégorie à supprimer
 * no response value expected for this operation
 **/
exports.categoriesIdCategorieDELETE = function (idCategorie) {
  return new Promise(function (resolve, reject) {
    const index = mockData.magasin.categories.findIndex(c => c.idCategorie === idCategorie);
    if (index !== -1) {
      mockData.magasin.categories.splice(index, 1);
      resolve({ result: 'ok' });
    } else {
      reject({ status: 404, message: 'Produit non trouvé' });
    }
  });
};

/**
 * Retourne les détails d'une catégorie spécifiée par son id
 *
 * idCategorie Integer L'id de la catégorie à récupérer
 * returns Categorie
 **/
exports.categoriesIdCategorieGET = function (idCategorie) {
  return new Promise(function (resolve, reject) {
    try {
      const categorie = mockData.magasin.categories.find(cat => cat.idCategorie === idCategorie);

      if (categorie) {
        resolve(categorie);
      } else {
        reject({ status: 404, message: 'Catégorie non trouvée' });
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Met à jour les informations d'une catégorie spécifiée par son id
 *
 * body Categorie  (optional)
 * idCategorie Integer L'id de la catégorie à mettre à jour
 * no response value expected for this operation
 **/
exports.categoriesIdCategoriePUT = function (body, idCategorie) {
  return new Promise(function (resolve, reject) {
    const index = mockData.magasin.categories.findIndex(c => c.idCategorie === idCategorie);

    if (index !== -1) {
      if (body.idCategorie && body.idCategorie !== idCategorie) {
        const isIdUnique = mockData.magasin.categories.every(c => c.idCategorie !== body.idCategorie);
        if (!isIdUnique) {
          reject({
            status: 400,
            message: "L'ID de la catégorie doit être unique",
          });
          return;
        }
      }
      const editCategorie = { ...mockData.magasin.categories[index], ...body };
      mockData.magasin.categories[index] = editCategorie;
      resolve(editCategorie);
    } else {
      reject({ status: 404, message: 'Catégorie non trouvée' });
    }
  });
};

/**
 * Liste les produits associés à une catégorie spécifiée par son id
 *
 * idCategorie Integer L'id de la catégorie
 * returns inline_response_200_6
 **/
exports.categoriesIdCategorieProduitsGET = function (idCategorie) {
  return new Promise(function (resolve, reject) {
    try {
      const produits = mockData.magasin.produits.filter(prod => prod.categorie === idCategorie);

      if (produits.length > 0) {
        resolve(produits);
      } else {
        reject({
          status: 404,
          message: 'Aucun produit trouvé pour cette catégorie',
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Ajoute une nouvelle catégorie de produit
 *
 * body CategorieWithLinks  (optional)
 * no response value expected for this operation
 **/
exports.categoriesPOST = function (body) {
  return new Promise(function (resolve, reject) {
    const existingCategorie = mockData.magasin.categories.find(c => c.idCategorie === body.idCategorie);
    if (existingCategorie) {
      reject({ status: 404, message: "L'ID de la catégorie doit être unique" });
      return;
    }
    const newCategorie = body;

    mockData.magasin.categories.push(newCategorie);
    resolve(newCategorie);
  });
};
