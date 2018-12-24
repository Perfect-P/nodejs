var users = require('../models/users.model');

module.exports.index = function(req,res){
    users.find().then(function(users){
        res.render('users/index',{
            users : users
        });
    });
}

module.exports.search = function(req,res){
    var q =req.query.q;//req.query return {'q': 'content'}
    // var filterData = db.get('users').value().filter(function(user){ //db.get('users').value() tra ve data
    //     return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    // });
    var filterData = users.find().pretty().then(function(user){
        return user.toLowerCase().indexOf(q.toLowerCase())!== -1;
    });


    res.render('users/index',{users: filterData});


}

module.exports.create = function(req,res){
    res.render('users/create');
}

module.exports.postCreate = function(req,res){// module create user
    //req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('/').slice(1).join('/');
    users.create(req.body, function(err){
        if(err)return handleError(err);
    });
    res.redirect('/users');
}

module.exports.getId = function(req,res){
    var id=req.params.id;
    var user = db.get('users').find({ id:id }).value();// tim user co id:id(id=req.param.id)
    res.render('users/view',{ user: user });
}