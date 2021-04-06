var mysql = require('mysql');

// buat koneksi database 
const conn =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'', 
    database:'Dbrestapi'
});

conn.connect((err)=>(
    if(err) throw err;
    console.log('myql terkoneksi');
));
module.exports = conn;

