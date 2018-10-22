module.exports.postCreate = function(req,res,next){
    var errors=[];// array chua loi
    if(!req.body.name){ // neu k nhap vao form name, them string bao loi vao errors
        errors.push('This name of user is required');
    }
    if(!req.body.phone){// neu k nhap vao form phone, them string bao loi vao errors
        errors.push('This phone of user is required');
    }
    if(errors.length){ // neu errors.length > 0 
        res.render('users/create', {errors: errors, values: req.body});// res.render 'user/create' truyen vao 2 tham so errors, values(values dung de giu lai thong tin ng dung da nhap)
        return; // return de ngat k them du lieu vao db khi co loi
    }
    next();
}