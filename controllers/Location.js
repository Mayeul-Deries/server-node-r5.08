'use strict';

const utils = require('../utils/writer.js');
const Location = require('../service/LocationService');

module.exports.locationsGET = function locationsGET (req, res, next) {
  Location.locationsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsIdLocationClientGET = function locationsIdLocationClientGET (req, res, next, idLocation) {
  Location.locationsIdLocationClientGET(idLocation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsIdLocationDELETE = function locationsIdLocationDELETE (req, res, next, idLocation) {
  Location.locationsIdLocationDELETE(idLocation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsIdLocationGET = function locationsIdLocationGET (req, res, next, idLocation) {
  Location.locationsIdLocationGET(idLocation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsIdLocationPUT = function locationsIdLocationPUT (req, res, next, body, idLocation) {
  Location.locationsIdLocationPUT(body, idLocation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsIdLocationProduitsGET = function locationsIdLocationProduitsGET (req, res, next, idLocation) {
  Location.locationsIdLocationProduitsGET(idLocation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsPOST = function locationsPOST (req, res, next, body) {
  Location.locationsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
