let mensaje = 'Debugeando la aplicación';

var saludar = () => {
  debugger;
  console.log(mensaje);
}

module.exports = ({
  saludar
});
