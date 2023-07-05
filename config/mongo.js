const mongoose = require("mongoose");
const mongoURI = process.env.mongoURI;

const connectToMongo = async () => {
    try {
      await mongoose.connect (mongoURI);
      console.log ('*** Conectado a MongoDB ****');
    } catch (error) {
      console.error (error);
      console.log (`-- Error al Conectar --`)
    }
}

module.exports = connectToMongo;