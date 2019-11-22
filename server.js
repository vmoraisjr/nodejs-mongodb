const express = require("express");
const mongoose = require("mongoose"); 
const requireDir = require("require-dir");
const cors = require('cors');



//Iniciando App
const app = express();
//Perminte utilização de Arquivos JSON
app.use(express.json());
//Perminte acesso Externo na aplicação
app.use(cors());



//Iniciando DB
    //Conectando com DB
mongoose.connect("mongodb://localhost:27017/operacao", 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

//Produtos
requireDir('./src/models');

//Acesso ao Product
const Product = mongoose.model('Product');

//Rotas
app.use('/api', require("./src/routes"));

    app.listen("3001");