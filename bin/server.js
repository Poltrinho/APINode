'use strict'

const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')

//Instanciando um servidor e rotas de acesso
const port = normalizePort(process.env.port || '3000');
app.set('port',port);

const server = http.createServer(app);

server.listen(port);
server.on('error',onError);
server.on('listening',onListening);
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

//Função para tratar erros.
function onError(error){
    if (error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES' :
            console.error(bind + 'É necessário privilégios');
            process.exit(1);
            break;
        case 'EADDRINUSE' : 
            console.error(bind + 'Usuário em uso');
            process.exit(1);
            break;
        default:
            throw error;       
    }   
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe ' + addr :
        ' port ' + addr.port;

    debug('Ouvindo '+ bind);
}