module.exports = () => {
    return {
        formNovoProduto: (req, res) => {
            res.render('produtos/form.ejs')
        },
        listaUmProduto: function(req, res) {
            const connection = require('../infra/connectionFactory')()
            const ProdutosDAO = require('../infra/ProdutosDAO') // classe
            const produtosDAO = new ProdutosDAO(connection)
            
            const idDoProduto = req.params.id
    
            produtosDAO.listarUm(idDoProduto)
                        .then(function(results) {
                            res.json(results)
                        })
    
            connection.end()
    
        },
        listagemDeTodosOsProdutos: function(requets, response) {
            const connection = require('../infra/connectionFactory')()
            const ProdutosDAO = require('../infra/ProdutosDAO') // classe
            const produtosDAO = new ProdutosDAO(connection) // gera o obj

            produtosDAO.listarTodos(function(err, results, fields) {
                // console.log('Que merda deu?', err)
                const produtos = results
                response.format({
                    html: function() {
                        response.render('produtos/lista.ejs', {
                            nome: 'Mario Souto Silva',
                            produtos: produtos
            
                        })
                    },
                    json: function() {
                        response.json(produtos)
                    }
                })
            })
    
            connection.end()
    
    
            // const produtos = [
            //     { nome: 'Livro Node', autor: 'Fulano', preco: 10 },
            //     { nome: 'Livro Ruby', autor: 'Fulano', preco: 10 },
            //     { nome: 'Livro Java', autor: 'Fulano', preco: 10 }
            // ]
    
    
            // response.render('produtos/lista.ejs', {
            //     nome: 'Mario Souto Silva',
            //     produtos: produtos
            // })
            // API cuspir JSON: response.json(produtos)
        }
    }
}