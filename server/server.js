const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const companies = require('./controllers/companies.js');
const founders = require('./controllers/founders.js');
require('dotenv').config();

// initialize server
const app = express();
const PORT = process.env.PORT || 3001

// middleware
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(bodyParser.json());

app.get('/companies', (req, res) => {
  companies.getAllCompanies()
           .then((data) => {
             res.status(200).send(data);
           })
           .catch((err) => {
             console.log(err);
             res.sendStatus(500);
           })
})

app.get('/companies/:company_id', (req, res) => {
  const companyId = req.params.company_id;
  companies.getOneCompany(companyId)
           .then((data) => {
             res.status(200).send(data);
           })
           .catch((err) => {
             console.log(err);
             res.sendStatus(500);
           })
})

app.post('/companies', (req, res) => {
  const newCompanyData = req.body;
  companies.addCompany(newCompanyData)
           .then((data) => {
             res.sendStatus(201);
           })
           .catch((err) => {
             console.log(err);
             res.sendStatus(500);
           })
})

app.put('/companies/:company_id', (req, res) => {
  const updatedCompanyData = req.body;
  const companyId = req.params.company_id
  companies.updateCompany(updatedCompanyData, companyId)
           .then((data) => {
             res.sendStatus(202);
           })
           .catch((err) => {
             console.log(err);
             res.sendStatus(500);
           })
})

app.delete('/companies/:company_id', (req, res) => {
  const companyId = req.params.company_id;
  companies.deleteCompany(companyId)
           .then((data) => {
             res.sendStatus(200);
           })
           .catch((err) => {
             console.log(err);
             res.sendStatus(500);
           })
})

app.get('/founders', (req, res) => {
  founders.getAllFounders()
           .then((data) => {
             res.status(200).send(data);
           })
           .catch((err) => {
             console.log(err);
             res.sendStatus(500);
           })
})

app.get('/founders/:company_id', (req, res) => {
  const companyId = req.params.company_id;
  founders.getCompanyFounders(companyId)
           .then((data) => {
             res.status(200).send(data);
           })
           .catch((err) => {
             console.log(err);
             res.sendStatus(500);
           })
})

app.post('/founders/:company_id', (req, res) => {
  const companyId = parseInt(req.params.company_id);
  const newFounderData = req.body
  founders.addFounder(newFounderData, companyId)
           .then((data) => {
             res.status(201).send(data);
           })
           .catch((err) => {
             console.log(err);
             res.sendStatus(500);
           })
})

app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
})