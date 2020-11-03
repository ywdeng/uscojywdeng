const mariadb = require('mariadb/callback');
const conn = mariadb.createConnection({
  host: '127.0.0.1',
  user: 'joseph',
  password: '1qaz@WSX',
  database: 'DrinkShop'
});
conn.connect(err => {
  if (err) {
    console.log("not connected due to error: " + err);
  } else {
    console.log("connected ! connection id is " + conn.threadId);
  }
});

conn.connect((err) => {
  if (err) return console.error("not connected due to error: " + err);
  conn.query(`
CREATE TABLE IF NOT EXISTS mytable (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  name VARCHAR(50) NOT NULL, 
  price INTEGER NOT NULL,  
  qty INT NOT NULL DEFAULT 0)`, (err, result) => {
      if (err) throw err;
      console.log(result);
    });

  // 插入單一資料
  var sql = "INSERT INTO mytable (name, price) VALUES (?, ?)";
  conn.query(sql, ["蘋果", 100], function (err, result) {
    if (err) throw err;
    console.log("affectedRows=" + result.affectedRows + ", insertId=" + result.insertId);
  });

  // 插入大量資料
  var batch = [
    ['香蕉', 24],
    ['鳳梨', 50],
    ['奇異果', 80]
  ];
  batch.forEach(e => {
    conn.query(sql, data, (err, result) => {
      if (err) throw err;
      console.log("affectedRows=" + result.affectedRows + ", insertId=" + result.insertId);
    });
  });

  // 查詢全部資料
  sql = "SELECT * FROM mytable ORDER BY id";
  conn.query(sql, [], (err, rows) => {
    if (err) throw err;
    rows.forEach(row => {
      console.log(row.id + "," + row.name + "," + row.price);
    });
  });

  // 修改資料
  var sql = "UPDATE mytable SET price=price+5";
  conn.query(sql, [], (err, result) => {
    if (err) throw err;
    console.log("affectedRows=" + result.affectedRows);
  });

  // 查詢單一資料
  sql = "SELECT * FROM mytable WHERE id=?";
  conn.query(sql, [1], (err, row) => {
    if (err) throw err;
    console.log(row);
  });

  // 刪除資料
  var sql = "DELETE FROM mytable WHERE length(name)>2";
  conn.query(sql, [], (err, result) => {
    if (err) throw err;
    console.log("affectedRows=" + result.affectedRows);
  });

  // 查詢單一資料
  sql = "SELECT COUNT(*) AS NUM FROM mytable";
  conn.query(sql, [], (err, row) => {
    if (err) throw err;
    console.log(row[0].NUM);
  });
});
conn.close(); 
