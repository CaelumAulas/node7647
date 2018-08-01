const mysql = require('mysql')


function connectionFactory() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodego'
    })

    return connection
}

module.exports = connectionFactory