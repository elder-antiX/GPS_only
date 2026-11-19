const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// A nuvem define a porta via variável de ambiente; em testes locais usa 3000
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/enviar', (req, res) => {
  res.sendFile(path.join(__dirname, 'enviar.html'));
});

let ultimaLocalizacao = {
  latitude: 0,
  longitude: 0,
  atualizadoEm: null
};

app.post('/atualizar', (req, res) => {
  const { latitude, longitude } = req.body;
  ultimaLocalizacao = {
    latitude,
    longitude,
    atualizadoEm: new Date()
  };
  res.status(200).json({ status: 'Sucesso' });
});

app.get('/localizacao', (req, res) => {
  res.json(ultimaLocalizacao);
});

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});