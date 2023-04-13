const DBSOURCE = "./todos.sqlite";

import betterSqlite3 from "better-sqlite3"

const db = betterSqlite3(DBSOURCE);

export function all() {
  const stm = db.prepare("SELECT * FROM todos");
  const rows = stm.all();
  return transformarLaSalida(rows);
}

export function allTodosByUser(id) {
  const stm = db.prepare("SELECT * FROM todos WHERE user_id = ?");
  const rows = stm.all(id);
  return transformarLaSalida(rows);
}

export function transformarLaSalida(rows) {
  return rows;
  const mappedRows = rows.map((elem) => {
    // const x = {...elem}

    // const nuevoElemento = {
    //   id: elem.id,
    //   todo: elem.todo,
    //   done: Boolean(elem.done),
    // };
    // return nuevoElemento;

    return {
      ...elem,
      done: Boolean(elem.done),
      text: `${ elem.title}, ${elem.description}`
    };

    return elem
  });

  // const mappedRows = rows;

  return mappedRows;
}

export function item(id) {
  const stm = db.prepare("SELECT * FROM todos WHERE id = ?");
  const row = stm.get(id);

  return transformarLaSalida([row])[0];
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
