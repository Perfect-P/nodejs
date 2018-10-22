const express = require('express');
const shortid =require('shortid');

var db = require('../db.js');
var controller =require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var authMiddleware = require('../middleware/auth.middleware');



const router = express.Router();

router.get('/', controller.index);// ham render can truyen vao 2 tham so {'path',data}

router.get('/search', controller.search);
    
router.get('/create', controller.create);

router.post('/create', validate.postCreate, controller.postCreate);

router.get('/:id', controller.getId);


module.exports = router;