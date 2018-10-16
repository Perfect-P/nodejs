const express = require('express');
var bodyParser = require('body-parser'); // npm install --save body-parser de luu data vao file json
const pug = require('pug'); // phai require pug
const shortid =require('shortid');

var db =require('./db');
var userRoutes = require('./routes/user.route');

const app =express();  
app.set('view engine', 'pug'); // only view, 
app.set('views','./views');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/users', userRoutes);
app.use(express.static('public'));// lu tru cac file public trong static

app.get('/',(req, res) => res.render('index',{
    name: 'Operate System'
})); //bai 1

var port =3000;

app.listen(port,() => console.log('Server listening on Port'+ port)); 