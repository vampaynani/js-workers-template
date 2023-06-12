require("dotenv").config();
const { runService } = require("./worker");

async function main() {
  const data = await runService("./workers/insert.js", {
    name: "Test1",
    email: "test1@mail.com",
  });
  console.log("worker data", data);

  const result = await runService("./workers/select.js");
  console.log(result);
}

main();
