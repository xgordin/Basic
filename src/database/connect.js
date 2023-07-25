const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose
    .connect(process.env.MONGODB_CONNECTIONSTRING)
    .then(() => {
      console.log("Conexão com o banco de dados estabelecida com sucesso!");
    })
    .catch((e) => {
      console.log("Ocorreu um erro ao se conectar com o banco de dados", e);
    });
};

module.exports = connectToDatabase;
