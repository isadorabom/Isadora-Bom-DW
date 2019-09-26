const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors()) 

mongoose
  .connect(
    'mongodb+srv://IsadoraBom:Rebom181909@isadorabom-le4yr.mongodb.net/test?retryWrites=true&w=majority'
   ) {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

requireDir('./src/models');

// Rotas

app.listen(3600);