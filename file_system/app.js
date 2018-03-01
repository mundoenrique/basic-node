'use strict'
const fs = require('fs');

console.log('Iniciado asincrono');
fs.readFile('./files/data.txt','utf-8', (error, data) => {
  console.log('leyendo archivo asincrono')
  error ? console.log(`Error ${error}`) : console.log(data);
});
console.log('Finalizado asincrono');


console.log('Iniciado sincrono');
let data = fs.readFileSync('./files/data.txt','utf-8');
console.log('leyendo archivo sincrono');
console.log(data);
console.log('Finalizado sincrono');

fs.rename('./files/file.txt', './files/datos.txt', (error) => {
  if(error) throw error;
  console.log('file.txt Renombrado a datos.txt');
  fs.appendFileSync('./files/file.txt', 'archivo para cambio de nombre');
});

fs.appendFile('./files/data.txt', '\n Cada día un poco más', (error) => {
  if(error) throw error;
  data = fs.readFileSync('./files/data.txt','utf-8');
  console.log(data);
});

fs.unlink('./files/datos.txt', (error) => {
  if(error) throw error;
  console.log('datos.txt eliminado')
});




