var low =require('lowdb'); //npm install lowdb --save
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');//viet file tren db.json
db=low(adapter); //goi ham low() va truyen vao adapter se tra ve 1 object moi

db.defaults({ users :[]})
    .write();

module.exports =db;