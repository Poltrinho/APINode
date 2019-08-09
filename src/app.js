const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const route = router.get('/',(req,res,next)=>{
    res.status(200).send({
        title: "Node API Get",
        version: "0.0.1"
    });
});
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
const create = router.post('/', (req,res,next) => {
    res.status(201).send(
        req.body
    );
});

const put = router.put('/:id', (req,res,next) => {
    const id =  req.params.id;
    
    res.status(201).send({
        id: id,
        item: req.body
    });
});

const del = router.delete('/', (req,res,next) => {
    res.status(201).send(req.body);
});

app.use('/',route);
app.use('/produtos',create);
app.use('/produtos',put);
app.use('/produtos',del);

module.exports = app;