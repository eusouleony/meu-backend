// routes/investimentos.js
const express = require('express');
const router = express.Router();
const Investimento = require('../models/Investimento');

// GET todos os investimentos
router.get('/', async (req, res) => {
    try {
        const investimentos = await Investimento.find().sort({ data: -1 });
        res.json(investimentos);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar investimentos', error: err });
    }
});

// POST criar investimento
router.post('/', async (req, res) => {
    const { descricao, valor } = req.body;
    try {
        const novoInvestimento = new Investimento({ descricao, valor });
        await novoInvestimento.save();
        res.status(201).json(novoInvestimento);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao criar investimento', error: err });
    }
});

module.exports = router;

