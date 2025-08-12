// web/models/Investimento.js
const mongoose = require('mongoose');

const investimentoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Investimento', investimentoSchema);
