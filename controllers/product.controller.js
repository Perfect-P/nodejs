var products = require('../models/products.model');

module.exports.index = function(req,res){
    // //item in page n
    // //x items per page
    // //begin =(n-1)*x
    // //end =(n-1)*x + x
    // var page = parseInt(req.query.q) || 1;
    // var perPage = 8;
    // var start = (page-1) * perPage;
    // var end = (page-1) * perPage + perPage;

    // res.render('products/index',{
    //     products: db.get('products').value().splice(start, end)
    // });
    products.find().then(function(products){
        res.render('products/index',{
            products: products
        });
    });

};