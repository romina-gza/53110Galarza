import express from 'express'
import ProductManager from './entClaseCoder.js'

const PORT = 8080
const app = express()
const list = new ProductManager('./products.json')

app.get('/', (req,res)=> {
    res.send('<h1>Hello world</h1>')
})

app.get('/products', async (req, res) => {
    let { skip, limit } = req.query
    let products = await list.getProducts()    
    
    if ( skip > 0 ) products = products.slice(skip)
    
    if ( limit > 0 ) products = products.slice(0,limit)
// Como podria mejorar o arreglar este codigo anterior? Asunto: Cuando query es 23 devuelve un array vacio, cuando lo envolví en un try/catch el error no aparecia, este error era en un console.war('hubo un err')
    res.json( products )
})

app.get('/products/:pid', async (req, res) => {
    let { pid } = req.params
    let products = await list.getProducts()
    
    let filterProducts = products.find(obj => obj.id == pid)

    if ( filterProducts ) {
        console.log(products)
        products = filterProducts
    } else {
        console.log(products, '...' , filterProducts)
        products = `no existe id: ${pid}.`
    }    

    console.log( typeof pid , pid, typeof products)
    res.json( products )
})

app.get('*', (req,res)=> {
    res.send('404 Error Not Found')
})

app.listen(PORT, (req,res)=>{
    console.log('escuchando')
})

