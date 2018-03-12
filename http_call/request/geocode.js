const request = require('request'),
      argv = require('yargs').argv;

var address = argv.address,
    key = `AIzaSyDqn-YWMBaOurAvFoaCilzSQ5dI-JAiFKU`,
    url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;

/*
request('http://www.google.com', (error, response, body) => {
  console.error('Error: ', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body: ', body);
});
*/

request({
  url: url,
  json: true
}, (error, response, body) => {
  error ? console.error('Error: ', error) : '';
  response.statusCode !== 200 ? console.log(response.statusMessage) : '';

  if(body.status === 'OK') {
    console.log('Body:', JSON.stringify(body, undefined, 1));
    console.log('Dirección:', JSON.stringify(body.results[0].formatted_address));
    console.log('Latitud:', JSON.stringify(body.results[0].geometry.location.lat));
    console.log('Longitud:', JSON.stringify(body.results[0].geometry.location.lng));
  } else if(body.status === 'ZERO_RESULTS') {

    console.log('La dirección no es correcta');
  }

});
