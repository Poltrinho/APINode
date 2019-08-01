'use strict'

const http = require('http')
const debug = require('debug')('nodestr:server')
const express = require('express')

//Instanciando um servidor e rotas de acesso
const app = express();
const port = normalizePort(process.env.port || '3000');
app.set('port',port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/',(req,res,next)=>{
    res.status(200).send({
        title: "Node API",
        version: "0.0.1"
    });
});

app.use('/',route);

server.listen(port)
console.log('API Server Rodando normalmente '+ port);

//Função para deixar a porta dinâmica, caso já estejá sendo usada
function normalizePort(val){
    const port = parseInt(val,10);

    if (isNaN(port)){
        return val;
    }

    if (port >= 0){
        return port;
    }

    return false;
}