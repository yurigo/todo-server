const DBSOURCE = "./todos.sqlite";

import betterSqlite3 from "better-sqlite3"

const db = betterSqlite3(DBSOURCE);

export function all() {
  const stm = db.prepare("SELECT * FROM users");
  const rows = stm.all();

  return rows;
}

export function item(id) {
  const stm = db.prepare("SELECT * FROM users WHERE id = ?");
  const rows = stm.get(id);
  return rows;
}

export function insert(data) {
  //
}

export function update(id, done) {
  // done es un boolean y en base de datos es un integer
  const intDone = done ? 1 : 0;
  const stm = db.prepare("UPDATE todos SET done = ? WHERE id = ?");
  const rows = stm.run(intDone, id);
  return rows;
}

export function remove(id) {
  const stm = db.prepare("DELETE FROM todos WHERE id = ?");
  const rows = stm.run(id);
  return rows;
}

// module.exports = {
//   all,
//   insert,
//   item,
//   update,
//   remove,
// };

export default {
  all,
  insert,
  item,
  update,
  remove,
};
