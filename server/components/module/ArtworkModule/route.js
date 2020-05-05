var express = require('express');
var routes = express.Router();
var controller = require('./artworkController')
// var routesVersioning = require('express-routes-versioning')();
const base_path = '/api/artwork/';

routes.route(`${base_path}getBase64Images`).get((req,res)=>{
    controller.getBase64Images(req,res);
});

module.exports = routes ;