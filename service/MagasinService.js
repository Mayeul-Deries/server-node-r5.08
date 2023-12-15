'use strict';
const mockData = require('../data/mockData.json');

/**
 * Liste les informations du magasin
 *
 * returns Magasin
 **/
exports.rootGET = function () {
  return new Promise(function (resolve, reject) {
    resolve(mockData.magasin);
  });
};
