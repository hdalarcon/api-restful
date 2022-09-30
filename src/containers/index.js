class Contenedor {
    
    constructor(){
        this.productos = []
    }

    save(producto){
        try {
            producto.id = this.productos.length + 1
            this.productos.push(producto)
            return producto
        } catch(error){
            return error
        }
    }

    getAll(){
        return this.productos
    }

    getById(id){
        try {
            const result = this.getAll().find(obj => obj.id == id) 
            return result === undefined ? ({error: 'Producto no encontrado'}) : result
        } catch(error){
            return error
        }
    }

    modifById(id, producto){
        try {
            producto.id = id
            this.getAll().splice(id-1, 1, producto)
            return this.getById(id)
        } catch(error){
            return error
        } 
    }

    deleteById(id){
        const productos = this.getAll();
        let mensaje
        try {
            productos.filter(obj => obj.id == id).length > 0 ? (this.productos = this.getAll().filter(obj => obj.id !== id), mensaje= {msg: `Se eliminó el producto ${id}`} ) : mensaje = {error: `Producto ${id} no encontrado`}
            return mensaje
        } catch(error){
            return error
        } 
    }


}


module.exports = Contenedor