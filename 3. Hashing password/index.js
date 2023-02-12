const app = require("./app");
const config = require("./config/config");
const dbConection = require("./config/db");

const PORT = config.app.port;

app.listen(PORT, async () => {
  console.log(`This server is successfully runing at http://localhost:${PORT}`);

  await dbConection();
});
