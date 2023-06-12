const { Worker } = require("worker_threads");

function runService(filename, workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(filename, { workerData });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Stopped with exit code ${code}`));
      }
    });
  });
}

module.exports = { runService };
