#!/usr/bin/node

const AmiClient = require('asterisk-ami-client');
let client = new AmiClient();
 
client.connect('localhost', 'secret', {host: 'localhost', port: 5038})
 .then(amiConnection => {
 
     client
         .on('connect', () => console.log('connect'))
         .on('event', event => console.log(event))
         .on('data', chunk => console.log(chunk))
         .on('response', response => console.log(response))
         .on('disconnect', () => console.log('disconnect'))
         .on('reconnection', () => console.log('reconnection'))
         .on('internalError', error => console.log(error))
         .action({
             Action: 'Ping'
         });
 
     setTimeout(() => {
         client.disconnect();
     }, 5000);
 
 })
 .catch(error => console.log(error));
