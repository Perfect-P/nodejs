var db =require('../db');
const shortid =require('shortid');

module.exports.index = function(req,res){
    res.render('users/index',{users : db.get('users').value()});
}

module.exports.search = function(req,res){
    var q =req.query.q;//req.query return {'q': 'content'}
    var filterData = db.get('users').value().filter(function(user){ //db.get('users').value() tra ve data
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index',{users: filterData});
}

module.exports.create = function(req,res){
    res.render('users/create');
}

module.exports.postCreate = function(req,res){// module create user
    var errors=[];
    if(!req.body.name){
        errors.push('This name of device is required');
    }
    if(!req.body.imei){
        errors.push('This imei of device is required');
    }
    if(errors.length){
        res.render('users/create', {errors: errors, values: req.body});
        return;
    }
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users');
}

module.exports.getId = function(req,res){
    var id=req.params.id;
    var user = db.get('users').find({ id:id }).value();// tim user co id:id(id=req.param.id)
    res.render('users/view',{ user: user });
}