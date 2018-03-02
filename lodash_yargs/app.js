'use strict'
const _ = require('lodash')

let x = {"nombre": "Enrique"};
let y = {"apodo": "mundoenrique"};
let z = [
  {nombre: "Enrique", Apellido: "Peñaloza", edad: 38},
  {nombre: "Yajaira", Apwllido: "Espinoza", edad: 36}
];

let result = _.assign(x, y);
console.log(result);
_.times(3, () => {
  console.log('Hola que tal!!!')
});

result = _.find(z, {nombre: 'Enrique'});

console.log(result);
