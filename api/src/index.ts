import express from 'express';
import mongoose from 'mongoose';

// mongoose.connect('mongodb://localhost:27017')
// .then(() => console.log("Conectado ao mongo"))
// .catch(() => console.log("Erro ao conectar ao mongoDb"))

mongoose.connect('mongodb://localhost:27017')
.then(() => {
  const app = express();
  app.listen(3001, () => {
    console.log('Server is running on https://localhost:3001')
  })
})
.catch(() => console.log("Erro ao conectar ao mongoDb"))

