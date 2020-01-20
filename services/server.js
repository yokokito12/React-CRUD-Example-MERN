// aqui e o servidor

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DBase.js');
const businessRoute = require('./bussiness.route.js');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Base de dados conectada') },
  err => { console.log('Nao pode ser conectada a base de Dados'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/profile', businessRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});