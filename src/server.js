const log = require("smallog");
const app = require('./index');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  log("Server is running on", port);
}) 