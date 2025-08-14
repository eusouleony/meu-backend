// routes/servicos.js
const express = require('express');
const router = express.Router();
const Servico = require('../models/Servico');

// Listar todos os serviços
router.get('/', async (req, res) => {
    try {
        const servicos = await Servico.find().sort({ data: -1 });
        res.json(servicos);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar serviços' });
    }
});

// Criar serviço
router.post('/', async (req, res) => {
    try {
        const novoServico = new Servico(req.body);
        const salvo = await novoServico.save();
        res.json(salvo);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao criar serviço' });
    }
});

// Deletar serviço
router.delete('/:id', async (req, res) => {
    try {
        await Servico.findByIdAndDelete(req.params.id);
        res.json({ message: 'Serviço removido com sucesso' });
    } catch (err) {
        res.status(400).json({ error: 'Erro ao remover serviço' });
    }
});

module.exports = router;
