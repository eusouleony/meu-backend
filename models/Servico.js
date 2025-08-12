const mongoose = require('mongoose');

const ServicoSchema = new mongoose.Schema({
  tecnico: String,
  descricao: String,
  valor: Number,
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Servico', ServicoSchema);