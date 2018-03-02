'use strict'
const fs = require('fs');

//Crea archivo data.txt
fs.appendFileSync('./files/data.txt', 'Hola aprendiendo nodeJS');

//Lectura asincrona del archivo data.txt
console.log('Iniciado asincrono');
fs.readFile('./files/data.txt','utf-8', (error, data) => {
  console.log('leyendo archivo asincrono')
  error ? console.log(`Error ${error}`) : console.log(data);
});
console.log('Finalizado asincrono');

//Lectura sincrona del archivo data.txt
console.log('Iniciado sincrono');
let data = fs.readFileSync('./files/data.txt','utf-8');
console.log('leyendo archivo sincrono');
console.log(data);
console.log('Finalizado sincrono');

//renombra archivo file.txt
fs.rename('./files/file.txt', './files/datos.txt', (error) => {
  if(error) throw error;
  console.log('file.txt Renombrado a datos.txt');
  //espera 900 milisegundos para iniciar
  setTimeout(() => {
    //Eliminar archivo datos
    fs.unlink('./files/datos.txt', (error) => {
      if(error) throw error;
      console.log('datos.txt eliminado');
      fs.appendFileSync('./files/file.txt', 'archivo para cambio de nombre');
    });
  }, 900);
});

//espera 900 milisegundos para iniciar
setTimeout(() => {
  //Escibir nueva línea en archivo data.txt
  fs.appendFile('./files/data.txt', '\n Cada día un poco más', (error) => {
    if(error) throw error;
    data = fs.readFileSync('./files/data.txt','utf-8');
    console.log('Nuena linea en data.txt')
    console.log(data);
    //Elimina archivo data.txt
    fs.unlink('./files/data.txt', (error) => {
      if(error) throw error;
      console.log('data.txt eliminado')
    });
  });
}, 900);

