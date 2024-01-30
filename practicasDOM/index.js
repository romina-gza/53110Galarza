const btn = document.querySelector('button')
const color = document.getElementById('color')
function generateColor() {
    let digitos = '0123456789ABCDEF'
    let colorHex = '#'

    for(let i = 0; i < 6; i++){
        let irandom = Math.floor(Math.random() * 16 )
        colorHex+= digitos[irandom]
    }

    console.log(colorHex)
    return colorHex
}

btn.addEventListener('click', function () {
    let colorRandom = generateColor()
    color.textContent = colorRandom
    document.body.style.backgroundColor = colorRandom
})