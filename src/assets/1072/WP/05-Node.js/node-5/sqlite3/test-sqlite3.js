const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database("db.sqlite3");

db.serialize(() => {
  db.run(`
CREATE TABLE IF NOT EXISTS mytable (
  account TEXT PRIMARY KEY, 
  name TEXT NOT NULL, 
  password TEXT)`);

  // 插入單一資料
  var sql = "INSERT INTO mytable (account, name, password) VALUES (?, ?, ?)";
  db.run(sql, ["ywdeng", "Joseph Deng", "1qaz@WSX"], function (err) {
    if (err) throw err;
    console.log("changes=" + this.changes + ", lastID=" + this.lastID);
  });

  // 插入大量資料
  var accounts = [
    ['gary', '許蓋功', '1234'],
    ['mary', '陳美麗', '5678'],
    ['john', '李強', '9900']
  ];
  var stmt = db.prepare(sql);
  for (let i = 0; i < accounts.length; i++) {
    stmt.run(accounts[i], function (err) {
      if (err) throw err;
      console.log("changes=" + this.changes + ", lastID=" + this.lastID);
    });
  }
  stmt.finalize(function (err) {
    if (err) throw err;
    console.log("Finalize changes=" + this.changes + ", lastID=" + this.lastID);
  });

  // 查詢全部資料
  sql = "SELECT * FROM mytable ORDER BY account";
  db.all(sql, [], (err, rows) => {
    if (err) throw err;
    rows.forEach((row) => {
      console.log(row.account + "," + row.name);
    });
  });

  // 修改資料
  var sql = "UPDATE mytable SET password='p@ssw0rD'";
  db.run(sql, [], function (err) {
    if (err) throw err;
    console.log("changes=" + this.changes + ", lastID=" + this.lastID);
  });

  // 查詢單一資料
  sql = "SELECT * FROM mytable WHERE account=?";
  db.get(sql, ['ywdeng'], (err, row) => {
    if (err) throw err;
    console.log(row);
  });

  // 刪除資料
  var sql = "DELETE FROM mytable WHERE length(name)<3";
  db.run(sql, [], function (err) {
    if (err) throw err;
    console.log("changes=" + this.changes + ", lastID=" + this.lastID);
  });

  // 查詢單一資料
  sql = "SELECT COUNT(*) AS NUM FROM mytable";
  db.get(sql, [], (err, row) => {
    if (err) throw err;
    console.log("剩下 " + row.NUM + " 筆資料");
  });
});
db.close(); 
