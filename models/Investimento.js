const mongoose = require('mongoose');

const InvestimentoSchema = new mongoose.Schema({
  descricao: {
    type: String,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  },
  categoria: {
    type: String,
    default: 'Geral'
  }
});

module.exports = mongoose.model('Investimento', InvestimentoSchema);
