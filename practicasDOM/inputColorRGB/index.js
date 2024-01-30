const inputRojo = document.getElementById('rojo')
const inputVerde = document.getElementById('verde')
const inputAzul = document.getElementById('azul')

const textoRojo = document.getElementById('texto-rojo')
const textoVerde = document.getElementById('texto-verde')
const textoAzul = document.getElementById('texto-azul')

let rojo =  inputRojo.value
let verde = inputVerde.value
let azul = inputAzul.value

textoRojo.innerText = rojo
textoVerde.innerText = verde
textoAzul.innerText = azul

// funcionalidad 
function updateColor(rojo,verde,azul){
    const colorRGB = `RGB( ${rojo}, ${verde}, ${azul} )`
    document.body.style.backgroundColor = colorRGB
}

// update red
inputRojo.addEventListener('change', (e)=> {
    rojo = e.target.value
    textoRojo.innerText = rojo
    updateColor(rojo,verde,azul)
})
inputVerde.addEventListener('change', (e)=> {
    verde = e.target.value
    textoVerde.innerText = verde
    updateColor(rojo,verde,azul)
})
inputAzul.addEventListener('change', e => {
    azul = e.target.value
    console.log(azul)
    console.log(e)
    textoAzul.textContent = azul
    updateColor(rojo,verde,azul)
})
console.log('azul fuera. ',azul)