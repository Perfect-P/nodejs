var express = require('express');
var bodyParser = require('body-parser'); // npm install --save body-parser de luu data vao file json
var pug = require('pug'); // phai require pug
var shortid =require('shortid');
var cookieParser = require('cookie-parser');
var db =require('./db');
var multer =require('multer');
var upload = multer({ dest : './public/uploads/'});// truyen duong dan upload file
var mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost/dbms');


var userRoutes = require('./routes/user.route');
var authRoutes = require('./routes/auth.route');
var productRoutes = require('./routes/product.route');


var authMiddleware = require('./middleware/auth.middleware');

const app =express();  
app.set('view engine', 'pug'); // only view, 
app.set('views','./views');
app.use(express.static('public'));// lu tru cac file public trong static
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser('securityStringForCookies'));
app.use('/users',authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

app.get('/',(req, res) => res.render('index',{
    name: 'Users managemnet'
})); //bai 1


var port =3000;
app.listen(port,() => console.log('Server listening on Port'+ port));//localhost:3000