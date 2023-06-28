require("dotenv").config();
const { runService } = require("./worker");
const Workers = require("./workers");

async function main() {
  const data = await runService(Workers.Insert, {
    name: "Test1",
    email: "test1@mail.com",
  });
  console.log("worker data", data);

  const result = await runService(Workers.SelectAll);
  console.log(result);
}

main();
