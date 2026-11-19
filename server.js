const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/enviar', (req, res) => {
  res.sendFile(path.join(__dirname, 'enviar.html'));
});

// Guarda várias pessoas: { "Ana": { nome, latitude, longitude, atualizadoEm }, ... }
let localizacoes = {};

app.post('/atualizar', (req, res) => {
  const { nome, latitude, longitude } = req.body;

  if (!nome || typeof latitude !== 'number' || typeof longitude !== 'number') {
    return res.status(400).json({ erro: 'Nome, latitude e longitude são obrigatórios.' });
  }

  const nomeLimpo = String(nome).trim().slice(0, 30);
  if (!nomeLimpo) {
    return res.status(400).json({ erro: 'Nome inválido.' });
  }

  localizacoes[nomeLimpo] = {
    nome: nomeLimpo,
    latitude,
    longitude,
    atualizadoEm: Date.now()
  };

  res.status(200).json({ status: 'Sucesso', nome: nomeLimpo });
});

app.get('/localizacao', (req, res) => {
  res.json({
    usuarios: Object.values(localizacoes),
    agora: Date.now()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});