'use satrict'
const os = require('os');
const fs = require('fs');
const myFile = require('./myfile');

let cpu = os.cpus();
let sys = os.platform();
let host = os.hostname();

myFile.saludar();
/*
console.log(cpu);
console.log(sys);
console.log(host);

let cpuString = JSON.stringify(cpu)

fs.appendFile('file.txt', `Información del CPU ${cpuString}`, (error) => {
  error ? console.log('error') : '';
});
*/
console.log(myFile.monto);
console.log(myFile.sumar(5, 6));
console.log(myFile.restar(8, 9));
console.log(myFile.multiplicar(4));

setTimeout (myFile.despedida, 2000, 'Dos segundos');

