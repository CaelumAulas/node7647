
// function listarTodos() {
//     connection.query('SELECT * FROM livros', )
// }

// DAO = Data Access Object

class ProdutosDAO {
    
    constructor(connection) {
        this._connection = connection
    }
    listarTodos (callback) {
        // console.log('seila', this)
        this._connection.query('SELECT * FROM livros', callback)
    } 
    listarUm(idDoProduto, callback) {
        return new Promise((resolve, reject) => {
            this._connection
            .query('SELECT * FROM livros WHERE id = ?',
                    idDoProduto,
                    function(erros, result) {
                    resolve(result)
                    reject(erros)
                })
        })
    }

    salvar(produto) {
        // Retornar uma promise! Ao invés de receber o callback
        return new Promise((resolve, reject) => {
            this._connection.query(
                'INSERT INTO livros SET ?',
                produto,
                function(err, result) {
                    if(err) {
                        reject(err)
                    }
                    resolve(result)
                })
        })
    }
}
module.exports = ProdutosDAO

// function ProdutosDAO (connection) {
//     this._connection = connection
// }

// this.prototype.listarTodos (callback) {
//     console.log('seila', this)
//     this._connection.query('SELECT * FROM livros', callback)
// } 


// module.exports = function(connection) {
//     return {
//         listarTodos: function(callback) {
//             connection.query('SELECT * FROM livros', callback)
//         }
//     }
// }



// {
//     listarTodos,
//     pegaUm,
//     apagar
//     atualizar
// }