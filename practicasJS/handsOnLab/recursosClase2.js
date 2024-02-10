// https://www.youtube.com/watch?v=wfogZfIS03U     Expresiones Regulares 

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet

// Ejemplos de expresiones regulares que sirven para validar emails (ej. para
// correr con JavaScript):
// Patrón corto
let reCorto = /\S+@\S+\.\S+/
// Patrón Medio
let reMedio = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
// Patrón Largo
let reLargo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
let res=reCorto.test('prueba@correo.com') // true
console.log(res)
res=reMedio.test('prueba@correo.com') // true
console.log(res)
res=reLargo.test('prueba@correo.com') // true
console.log(res)

// https://forms.gle/phRHXSi5sCpb1tuY6

// https://github.com/diegopolverelli/comision-53110-backend

// https://es.wikipedia.org/wiki/Brendan_Eich

// https://developer.marvel.com/
// https://api-ninjas.com/
// https://reqres.in


// apiKey Ninja: pLq21i0GEvrvyeO3I1OERA==4KqZqwdEQxUDCD7E

