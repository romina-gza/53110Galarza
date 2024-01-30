

let randomNumbers = (min, max) => {
    let numRandom = Math.floor(Math.random() * (max - min) + min)
    return numRandom
}

const objetos = [
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

// new list arr todos los productos (keys)
// get total products (values)
objetos.reduce(
    (acc, obj) => {
        let res = Object.keys(obj)
        res.forEach(key => {
            console.log('key ',key)
            while ( !acc.includes(key) ) {
                acc.push(key)
            }
        })

        console.log('res ',res) 
        console.log('acc ', acc)
        return acc
    },
    []
)

