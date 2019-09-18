const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Conecta no MongoDB
mongoose.connect('mongodb://linx-play:AW0lyOsJcsBSiMjb4VyTyZvg7C8K1XihfPK8VYvw33zXsDOUfQQGl40mZQlyBmxZYC6q4lz8X5BWSVWYf9DC2A==@linx-play.documents.azure.com:10255/DEV-LINXPLAY?ssl=true&replicaSet=globaldb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
// Carrega o model de Usuário
require("./models/user");

app.use(bodyParser.json());

// Inicia as rotas da API
app.use("/api", require("./controllers/userController"));

app.listen(3000);
