const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // para carregar as variáveis do .env no local

// Importa as rotas
const servicosRoutes = require('./routes/servicos');
const investimentosRoutes = require('./routes/investimentos');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB Atlas (usando variável de ambiente)
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado ao MongoDB Atlas'))
.catch(err => console.error('❌ Erro ao conectar no MongoDB:', err));

// Rotas
app.use('/api/servicos', servicosRoutes);
app.use('/api/investimentos', investimentosRoutes);

// Rota inicial de teste
app.get('/', (req, res) => {
  res.send('🚀 Backend rodando com Express + MongoDB Atlas!');
});

// Porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
