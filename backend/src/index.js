const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // Passando o caminho relativo

const app = express();

app.use(cors()); // Desenvolvimento
app.use(express.json());
app.use(routes); // Utilizando o arquivo importado pela constante atribuída

 /**
  * BANCO DE DADOS
  * 
  * Driver: SELECT * FROM users
  * Query builder: table('users').select('*').where('')
  * Knex.js
  */

//acessa a porta 3333 para caminho do app. Padrão do Node/Express
app.listen(3333);
