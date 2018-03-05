'use strict'
const _ = require('lodash'),
      yargs = require('yargs')

console.log('<----- Iniciando lodash ------>');
let x = {"nombre": "Enrique"};
let y = {"apodo": "mundoenrique"};
let z = [
  {nombre: "Enrique", Apellido: "Peñaloza", edad: 38},
  {nombre: "Yajaira", Apellido: "Espinoza", edad: 38}
];

let result = _.assign(x, y);
console.log(result);
_.times(3, () => {
  console.log('Hola que tal!!!')
});

result = _.find(z, {nombre: 'Enrique'});
console.log(result);

result = _.find(z, {nombre: 'Enrique', Apellido: 'Espinoza'});
console.log(result);

result = _.find(z, {edad: 38});
console.log(result);
console.log('<----- Finalizando lodash ------>');

console.log('<----- Iniciando Yargs ------>');
let comando = process.argv;
console.log(comando);
comando = process.argv[2];

if(comando === 'usuario') {
  console.log('Usuario activo')
} else {
  console.log('Usuario inválido');
}

console.log(yargs);
let argv = yargs.argv;
console.log(argv);

if(argv.usuario === 'mundoenrique') {
  console.log('usuario encontrado');
} else {
  console.log('El usuario no existe');
}

console.log('<----- Finalizando Yargs ------>');
