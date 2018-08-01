const ProdutosController = require('../controllers/ProdutrosController')
const produtosController = ProdutosController()

module.exports = function(app) {

    
    app.get('/produtos/form', produtosController.formNovoProduto)
    app.get('/produtos/:id', produtosController.listaUmProduto)

    app.get('/produtos', produtosController.listagemDeTodosOsProdutos)

    app.post('/produtos', (req, res) => {
        const connection = require('../infra/connectionFactory')()
        const ProdutosDAO = require('../infra/ProdutosDAO') // classe
        const produtosDAO = new ProdutosDAO(connection) // gera o obj
        
        const produto = req.body 

        // Fluent Validations
        req.assert('titulo', 'Titulo não pode ser vazio')
            .notEmpty()

        req.assert('preco', 'Tem que ser um float')
            .isFloat()

        const errors = req.validationErrors()

        // Erro tem que aparecer na mesma janela
        if(errors) {
            res.status(400).format({
                html: function() {
                    res.render('produtos/form', {
                        validationErrors: errors
                    })
                },
                json: function() {
                    res.json(errors)
                }
            })

        } else {
            produtosDAO.salvar(produto)
                .then(function(result) {
                    // res.send({
                    //     result: result
                    // })
                    res.format({
                        html: () => {
                            res.redirect('/produtos')
                        },
                        json: () => {
                            res.status(201).json({
                                msg: 'Produto criado com sucesso!',
                                result: result
                            })
                        }
                    })
                })
                .catch((qualquerErroRodadoAnteriormente) => {
                    res.send(qualquerErroRodadoAnteriormente)
                })
        }
    })

}

