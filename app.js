const mysql = require('mysql');
 
const db = mysql.createConnection({
    host     : '0.0.0.0',
    user     : 'clinet',
    password : '1234',
    database : '기계학습'
  });
 
const _use = () =>{
  db.query('USE world',(err,result)=>{
    if(err) throw(err);
    console.log("USE result : ",result);
  })
}
 
const _select = () =>{
  db.query('SELECT * FROM aa',(err,result)=>{
    if(err) throw(err);
    console.log("SELECT result : ", result);
  })
}
 
const _insert = () =>{
  let sql = "INSERT aa(a) VALUES('느금마');"
  db.query(sql,(err,result)=>{
    if(err) throw(err);
    console.log("INSERT result: ",result);
  })
}
 
const init = () =>{
  db.connect((err)=>{
    if(err) throw(err);
    console.log('db connected...');
  });
  _use();
  _select();
  _insert();
}
 
init();