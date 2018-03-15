'use strict'
const fecth = require('node-fetch');

let promesa = fecth('https://api.github.com/users/mundoenrique');

promesa.then((res) => {
  return res.json();
}).then((json) => {
  console.log(json);
});
