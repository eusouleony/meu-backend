const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Importa as rotas
const servicosRoutes = require('./routes/servicos');
const investimentosRoutes = require('./routes/investimentos');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/meuBanco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch(err => console.error('❌ Erro ao conectar no MongoDB:', err));

// Rotas
app.use('/api/servicos', servicosRoutes);
app.use('/api/investimentos', investimentosRoutes);

// Rota inicial de teste
app.get('/', (req, res) => {
  res.send('🚀 Backend rodando com Express + MongoDB!');
});

// Porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
