// routes/investimentos.js
const express = require('express');
const router = express.Router();
const Investimento = require('../models/Investimento');

// GET /api/investimentos
router.get('/', async (req, res) => {
  try {
    const itens = await Investimento.find().sort({ data: -1 });
    res.json(itens);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar investimentos' });
  }
});

// POST /api/investimentos
router.post('/', async (req, res) => {
  const { nome, valor } = req.body;
  if (!nome || valor === undefined || valor === null || isNaN(Number(valor))) {
    return res.status(400).json({ error: 'Campos "nome" e "valor" são obrigatórios e valor deve ser numérico' });
  }
  try {
    const novo = new Investimento({ nome, valor: Number(valor) });
    const salvo = await novo.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao salvar investimento' });
  }
});

// DELETE /api/investimentos/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const removido = await Investimento.findByIdAndDelete(id);
    if (!removido) return res.status(404).json({ error: 'Investimento não encontrado' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erro ao remover investimento' });
  }
});

module.exports = router;
