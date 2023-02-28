// const data = [
//   {
//     id: 1,
//     text: "hola",
//     done: true,
//   },
//   {
//     id: 2,
//     text: "adios",
//     done: false,
//   },
// ];

const sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "./todos.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  console.error(err);
});

function all(req, res) {
  const sql = "select * from todos";
  console.log(sql);
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    console.log(rows);
    res.json(
      rows.map((row) => ({ ...row, text: row.todo, done: Boolean(row.done) }))
    );
  });
}

function item() {
  return;
}

function insert(req, res) {
  var sql = `INSERT INTO todos (todo, done) VALUES ( '${req.body.text}' , false);`;
  console.log(sql);

  var params = [];

  db.run(sql, params, function (err) {
    console.log(this);
    console.log(err);
    if (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({
      id: this.lastID,
      text: req.body.text,
      done: false,
    });
  });
}

function update() {
  return;
}

function remove() {
  return;
}

module.exports = {
  all,
  item,
  insert,
  update,
  remove,
};
