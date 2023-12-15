'use strict';

const utils = require('../utils/writer.js');
const Magasin = require('../service/MagasinService');

module.exports.rootGET = function rootGET (req, res, next) {
  Magasin.rootGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
