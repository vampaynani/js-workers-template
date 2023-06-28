const db = require("../base/db");
const { parentPort } = require("worker_threads");

db.select("*")
  .from("test")
  .then((result) => parentPort.postMessage(result));
