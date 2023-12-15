'use strict';

const utils = require('../utils/writer.js');
const Client = require('../service/ClientService');

module.exports.clientsGET = function clientsGET (req, res, next) {
  Client.clientsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientsIdClientDELETE = function clientsIdClientDELETE (req, res, next, idClient) {
  Client.clientsIdClientDELETE(idClient)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientsIdClientGET = function clientsIdClientGET (req, res, next, idClient) {
  Client.clientsIdClientGET(idClient)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientsIdClientLocationGET = function clientsIdClientLocationGET (req, res, next, idClient) {
  Client.clientsIdClientLocationGET(idClient)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientsIdClientPUT = function clientsIdClientPUT (req, res, next, body, idClient) {
  Client.clientsIdClientPUT(body, idClient)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientsPOST = function clientsPOST (req, res, next, body) {
  Client.clientsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
