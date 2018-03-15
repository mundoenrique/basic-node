'use strict'
var prom = require('./promesa');

let  promesa = new Promise((resolve, reject) => {
  resolve('Éxito al procesar los datos');
  reject('existe un error');
});

promesa.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});

prom.calcular(5, 0).then((response) => {
  console.log(response)
}, (error) => {
  console.error(error)
})
