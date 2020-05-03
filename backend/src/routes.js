const express = require('express');
const routes = express.Router();

const CompanyController = require('./controllers/CompanyController');
const ServiceController = require('./controllers/ServiceController');

routes.get('/', (req, res) => {
    return res.status(200).json({
        api:"ICNT Services",
        description: "REST API for the Instituto Cultural Nação Tambor Services app",
        version:"1.0.0",
    })
});

routes.get('/company', CompanyController.index);
routes.post('/company', CompanyController.create);
routes.delete('/company/delete', CompanyController.delete);

routes.get('/service', ServiceController.index);
routes.post('/service', ServiceController.create);
routes.delete('/service', ServiceController.delete);

module.exports = routes;