const express = require('express');
const routes = express.Router();

const CompanyController = require('./controllers/CompanyController');
const ServiceController = require('./controllers/ServiceController');

routes.get('/', (req, res) => {
    return res.json({
        msg:"It's Working",
    })
});

routes.get('/company', CompanyController.index);
routes.post('/company', CompanyController.create);
routes.delete('/company/delete', CompanyController.delete);

routes.get('/service', ServiceController.index);
routes.post('/service', ServiceController.create);
// routes.delete('/service/delete', ServiceController.delete);

module.exports = routes;