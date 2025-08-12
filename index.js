// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db');

// Conectar ao MongoDB Atlas
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// rotas
const investimentosRoutes = require('./routes/investimentos');
app.use('/api/investimentos', investimentosRoutes);

// se você tiver também a rota de serviços:
const servicosRoutes = require('./routes/servicos');
app.use('/api/servicos', servicosRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
