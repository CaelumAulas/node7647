const app = require('./custom-express')
const port = 3000

app.listen(port, function() {
    // console.log('Servidor subiu na porta ' + port)
    console.log(`Servidor subiu em http://localhost:${port}`)
})