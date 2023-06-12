const db = require("../base/db");
const { parentPort, workerData } = require("worker_threads");

console.log(workerData);
db.insert(workerData)
  .into("test")
  .then((result) => parentPort.postMessage(result));
