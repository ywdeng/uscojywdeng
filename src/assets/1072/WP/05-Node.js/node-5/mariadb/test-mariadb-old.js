const mariadb = require('mariadb/callback');
var conn = mariadb.createConnection({
  host: '127.0.0.1',
  user: 'joseph',
  password: '1qaz@WSX',
  database: 'DrinkShop'
});

const DDL = `CREATE TABLE IF NOT EXISTS mytable (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  name VARCHAR(50) NOT NULL, 
  price INT NOT NULL, 
  qty INT NOT NULL DEFAULT 0)`;

conn.connect(function (err) {
  if (err) {
    console.error("Connect Error: " + err);
  } else {
    console.log("connected ! connection id is " + conn.threadId);
    conn.query(DDL, function (err1, result) {
      if (err1) {
        console.error("Query Error: " + err1);
      } else {
        console.log("affectedRows=" + result.affectedRows + ", insertId=" + result.insertId);
      }
    });
  }
});

conn.close();
