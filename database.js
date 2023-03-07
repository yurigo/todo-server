const DBSOURCE = "./todos.sqlite";

const betterSqlite3 = require("better-sqlite3");
const db = betterSqlite3(DBSOURCE);

function all() {
  const stm = db.prepare("SELECT * FROM todos");
  const rows = stm.all();

  const mappedRows = rows.map((elem) => {
    // const x = {...elem}

    const nuevoElemento = {
      id: elem.id,
      todo: elem.todo,
      done: Boolean(elem.done),
    };
    return nuevoElemento;

    // return {
    //   ...elem,
    //   done: Boolean(elem.done)
    // };
  });

  // const mappedRows = rows;

  return mappedRows;
}

function item(id) {
  const stm = db.prepare("SELECT * FROM todos WHERE id = ?");
  const rows = stm.get(id);
  return rows;
}

function insert(data) {
  //
}

function update(id, done) {
  // done es un boolean y en base de datos es un integer
  const intDone = done ? 1 : 0;
  const stm = db.prepare("UPDATE todos SET done = ? WHERE id = ?");
  const rows = stm.run(intDone, id);
  return rows;
}

function remove(id) {
  const stm = db.prepare("DELETE FROM todos WHERE id = ?");
  const rows = stm.run(id);
  return rows;
}

module.exports = {
  all,
  insert,
  item,
  update,
  remove,
};
