const app = require("./app");
const conectarBD = require("./config");
require("dotenv").config();

const puerto = process.env.PORT || 3000;

conectarBD();

app.listen(puerto, () => {
  console.log(`Servidor está corriendo en el puerto ${puerto}`);
});
