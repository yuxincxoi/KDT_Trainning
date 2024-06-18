const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the database.");
});

// console.log(db);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL
    )`);

  // 데이터 삽입 (Create)
  let insertStmt = db.prepare(`INSERT INTO users (name, email) VALUES (?, ?)`);
  insertStmt.run("John Doe", "john@example.com", function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`User John Doe added with ID ${this.lastID}`);
  });

  insertStmt.run("Jane Smith", "jane@example.com", function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`User Jane Smith added with ID ${this.lastID}`);
  });

  insertStmt.finalize();

  // 데이터 읽기 (Read)
  db.each(`SELECT * FROM users`, (err, row) => {
    if (err) {
      throw err;
    }
    console.log(`${row.id}: ${row.name} - ${row.email}`);
  });

  // 데이터 수정 (Update)
  let updateStmt = db.prepare(
    `UPDATE users SET name = ?, email = ? WHERE id = ?`
  );
  updateStmt.run("John Updated", "johnupdated@example.com", 1, function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`User 1 updated`);
  });
  updateStmt.finalize();

  // 데이터 삭제 (Delete)
  let deleteStmt = db.prepare(`DELETE FROM users WHERE id = ?`);
  deleteStmt.run(2, function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`User 2 deleted`);
  });
  deleteStmt.finalize();

  // 업데이트 후 데이터 읽기
  db.each(`SELECT * FROM users`, (err, row) => {
    if (err) {
      throw err;
    }
    console.log(`${row.id}: ${row.name} - ${row.email}`);
  });
});

// 연결 종료
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
