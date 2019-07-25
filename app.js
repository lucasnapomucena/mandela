const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.render('index', { title: "Vem fazer seu site aqui no Mandela.com.br", description: "Agencia especializada em Marketing digital, invista em estratégias, agencia digital em suzano, agencia digital em santo andré web designer, aplicativos, ecommerce, loja virtual" });
});

app.get('/blog', (req, res) => {
    res.render('/blog/index', { title: "Blog - Mandela", description: "" });
})
app.post('/contact', (req, res) => {


})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("conectado com sucesso");
})