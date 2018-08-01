// Imports Gerais
const http = require('http') // import http from 'http'

// Código da aplicação
const server = http.createServer(function lidaComRequests(request, response) {
    console.log('chegou um request', request.url)

    // let resposta = '<h1>Oops! 404</h1>'
    // response.writeHead(404, { 'Content-type': 'text/html' })
    // // / === Home
    // if(request.url === '/') {
    //     resposta = 'Você está na home'
    //     response.writeHead(200, { 'Content-type': 'text/html' })

    // }

    // // /produtos === Produtos
    // if(request.url === '/produtos') {
    //     resposta = 'Você está em produtos'
    //     response.writeHead(200, { 'Content-type': 'text/html' })

    // }
    const rotas = []

    rotas['/'] = 'Voce esta na home'
    rotas['/produtos'] = 'Voce esta em produtos'

    console.log(rotas, request.url)
    // if(rotas[request.url]) {
        response.end(rotas[request.url] || 'Página 404')
    // } else {
    //     response.end('Página 404')
    // }
})

server.listen(3000, function () { // Essa função é um callback
    console.log('Servidor subiu com sucessinhos!')
})

