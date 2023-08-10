const mysql = require('mysql2');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodecrudmysql'
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected');
  
  // con.query("SELECT * FROM usertable", function(err, rows) {
  //   if (err) throw err;
  //   console.log(rows);
  //   // Process the result rows here
  // });
});

module.exports= con;