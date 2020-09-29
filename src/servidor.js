const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/produto',(req,res,next)=>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req,resp,next)=>{
    resp.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome:req.body.nome,
        preco:require.body.preco
    })

    res.send(produto) //gerar JSON
})

app.delete('/produtos/:id',(req,res,next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //gerar JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}.`)

})
