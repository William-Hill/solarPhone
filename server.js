const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;

const customerController = require('/controllers/customer.controller.js')

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.post('/customer', function(request, response){
  customerController.createCustomer(request, response);
});

app.get('/customer:customerID', function(request, response){
  customerController.getCustomer(request, response);)
})

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
