'use satrct'

var saludar = () => {
  console.log('Hola que tal');
}

let monto = 50000;

var sumar = (a, b) => {
  let rpta = a + b;
  return rpta;
}

var restar = (a, b) => a - b

var multiplicar = a => a * 2;

var despedida = (arg) => {
  console.log(arg)
  console.log ('adios');
}

module.exports = ({
  monto,
  saludar,
  sumar,
  restar,
  multiplicar,
  despedida
});


