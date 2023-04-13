// const express = require("express");
import express from "express"

// const {
//   all,
//   item,
//   update,
//   insert,
//   remove,
// } = require("../controllers/users.controller");

import {
  all,
  item,
  update,
  insert,
  remove
} from "../controllers/users.controller.js"

export const router = express.Router();

// const todosRouter = require("./todos.router");

router.get("/", all);
router.get("/:id", item);
router.post("/", insert);
router.delete("/:id", remove);
router.put("/:id", update);

// router.use("/:id_user/todos", todosRouter);

router.param("id_user", (req, res, next, value) => {
  req.USER_ID = value;
  next();
});
// router.use("/:id/todos", () => {
//   console.log("x");
// });

// module.exports = router;
