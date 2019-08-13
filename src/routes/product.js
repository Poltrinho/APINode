'use strict'

const express = require('express');
const router = express.Router();

/**
 * req: É a informação que está sendo requitada
 * res: É a resposta da requisição
 * 
 * 200: Sucesso
 * 201: Create
 * 400: Erro
 * 401: Não autenticado
 * 403: Acesso negado
 * 500: Erro automático do sistema
 * 
 * req.body: pegar o corpo da requisição 
*/
router.post('/', (req,res,next) => {
    res.status(201).send(
        req.body
    );
});

router.put('/:id', (req,res,next) => {
    const id =  req.params.id;
    
    res.status(201).send({
        id: id,
        item: req.body
    });
});

router.delete('/', (req,res,next) => {
    res.status(201).send(req.body);
});


module.exports = router;