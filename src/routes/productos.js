const { Router } = require ('express')
const routerProduct = Router();
const Contenedor = require('../containers/index')

const contenedor = new Contenedor()

routerProduct.get('/', (req, res) => {
    res.json(contenedor.getAll())
})

routerProduct.get('/:id', (req, res) => {
    const num = parseInt(req.params.id)
    res.json(contenedor.getById(num))
})

routerProduct.post('/', (req, res) => {
    const product = req.body
    res.json(contenedor.save(product))
})

routerProduct.put('/:id', (req, res) => {
    const num = parseInt(req.params.id)
    const product = req.body
    res.json(contenedor.modifById(num, product))
})

routerProduct.delete('/:id', (req, res) => {
    const num = parseInt(req.params.id)
    res.json(contenedor.deleteById(num))
})


module.exports = routerProduct