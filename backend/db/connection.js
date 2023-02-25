const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DB || 'sigma_clone',
});

connection.connect((err) => {
  if (err) console.log(err);
  console.log('Database connected...');
});

// let sql = 'SELECT 1+1 AS test';
// connection.query(sql, (err, result) => {
//   if (err) throw err;
//   console.log(result);
// });

// connection.end();

module.exports = connection;
