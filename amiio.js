#!/usr/bin/node
var AmiIo = require("ami-io"),
        amiio = AmiIo.createClient(),
        amiio2 = new AmiIo.Client();
 
 
    amiio.on('incorrectServer', function () {
        amiio.logger.error("Invalid AMI welcome message. Are you sure if this is AMI?");
        process.exit();
    });
    amiio.on('connectionRefused', function(){
        amiio.logger.error("Connection refused.");
        process.exit();
    });
    amiio.on('incorrectLogin', function () {
        amiio.logger.error("Incorrect login or password.");
        process.exit();
    });
    amiio.on('event', function(event){
        amiio.logger.info('event:', event);
    });
    amiio.connect();
    amiio.on('connected', function(){
        setTimeout(function(){
            amiio.disconnect();
            amiio.on('disconnected', process.exit());
        },0);
    });
