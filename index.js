const express = require('express');
var bodyParser = require('body-parser'); // npm install --save body-parser de luu data vao file json
const pug = require('pug'); // phai require pug
const shortid =require('shortid');
var cookieParser = require('cookie-parser');

var db =require('./db');
var userRoutes = require('./routes/user.route');
var authRoutes = require('./routes/auth.route');

var authMiddleware = require('./middleware/auth.middleware');


const app =express();  
app.set('view engine', 'pug'); // only view, 
app.set('views','./views');
app.use(express.static('public'));// lu tru cac file public trong static
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use('/users',authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);

app.get('/',(req, res) => res.render('index',{
    name: 'Users managemnet'
})); //bai 1


var port =3000;
app.listen(port,() => console.log('Server listening on Port'+ port));//localhost:3000