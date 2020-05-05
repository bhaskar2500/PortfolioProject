var express = require('express');
var routes = express.Router();
var controller = require('./resumeController')
// var routesVersioning = require('express-routes-versioning')();
const base_path = '/api/resume/';

routes.route(`${base_path}getResumeData`).get((req,res)=>{
    controller.getResumeData(req,res);
});
routes.route(`${base_path}getNavbarDetails`).get((req,res)=>{
    controller.getNavBarDetails(req,res);
});

routes.route(`${base_path}getSummarizedData`).post((req,res)=>{
    controller.getSummarizedData(req,res);
});


module.exports = routes ;