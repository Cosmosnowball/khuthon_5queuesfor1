const mysql = require('mysql');
 
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '7462',
    database : '기계학습'
  });
 
const _use = () =>{
  db.query('USE 기계학습',(err,result)=>{
    if(err) throw(err);
    console.log("USE result : ",result);
  })
}
 
const _select = () =>{
  db.query('SELECT * FROM 기초기초기초기계학습',(err,result)=>{
    if(err) throw(err);
    console.log("SELECT result : ", result);
  })
}
 
const _insert = () =>{
  let sql = "INSERT 기초기초기초기계학습(문제, 답) VALUES('임시 문제', '정답입니다');"
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