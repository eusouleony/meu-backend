const express = require('express');
const router = express.Router();
const Servico = require('../models/Servico');

// Criar serviço
router.post('/', async (req, res) => {
  try {
    const novoServico = new Servico(req.body);
    const servicoSalvo = await novoServico.save();
    res.json(servicoSalvo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Listar serviços
router.get('/', async (req, res) => {
  try {
    const servicos = await Servico.find().sort({ data: -1 });
    res.json(servicos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
