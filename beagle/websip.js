var JsSIP = require('jssip');
JsSIP.debug.enable('JsSIP:*');
var socket = new JsSIP.WebSocketInterface('wss://192.168.66.103');
var configuration = {
  sockets  : [ socket ],
  uri      : 'sip:1000@192.168.66.103:8089',
  password : '1234ab'
};

var ua = new JsSIP.UA(configuration);
console.log(ua);

ua.start();

// Register callbacks to desired call events
var eventHandlers = {
  'progress': function(e) {
    console.log('call is in progress');
  },
  'failed': function(e) {
    console.log('call failed with cause: '+ e.data.cause);
  },
  'ended': function(e) {
    console.log('call ended with cause: '+ e.data.cause);
  },
  'confirmed': function(e) {
    console.log('call confirmed');
  }
};

var options = {
  'eventHandlers'    : eventHandlers,
  'mediaConstraints' : { 'audio': true, 'video': true }
};

var session = ua.call('sip:1001@192.168.66.103');