module.exports = function(app) {

    // # Desafio, criar módulo em "./routes" da home
    app.get('/', function(request, response) {
        response.send('Hello World')
    })

    return 'x'
}

