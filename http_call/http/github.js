'use strict'
const https = require('https');

let userName = 'mundoenrique',
    chromeUserAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    fireFoxUserAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1',
    edgeUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
    ieUserAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko',
    options = {
      host: 'api.github.com',
      path: '/users/' + userName,
      method: 'GET',
      headers: {'user-agent': ieUserAgent}
    },
    request = https.request(options, (response) => {
      let body = '';
      response.on('data', (out) => {
        body+= out;
      });

      response.on('end', (out) => {
        let json = JSON.parse(body);
        console.log(json);
      });
    });

    request.on('error', (e)=> {
      console.error(e);
    });

    request.end();
