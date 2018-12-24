var express = require('express');
var shortid =require('shortid');
var db = require('../db.js');
var multer = require('multer'); //npm install multer --save
var controller =require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var authMiddleware = require('../middleware/auth.middleware');
var upload = multer({dest: './public/uploads/'});// truyen duong dan upload file


const router = express.Router();

router.get('/', controller.index);// ham render can truyen vao 2 tham so {'path',data}

router.get('/search', controller.search);
    
router.get('/create', controller.create);

router.post('/create',upload.single('avatar'), validate.postCreate, controller.postCreate);

router.get('/:id', controller.getId);


module.exports = router;