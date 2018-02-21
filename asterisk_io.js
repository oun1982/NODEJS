#!/usr/local/bin/node721

var aio = require('asterisk.io'),
    ami = null;
 
ami = aio.ami(

    'localhost',  
 
    5038,               
                        
    'localhost',           
 
    'secret'            
);
 
ami.on('error', function(err){
    throw err;
});
 
// this catch any event from asterisk pbx 
ami.on('eventAny', function(data){
    let str_dialB = new RegExp('DialBegin');
    let str_dialE = new RegExp('DialEnd');
    let str_hangup = new RegExp('\^Hangup');
    let str_queueJ = new RegExp('\QueueCallerJoin');
    let str_queueMS = new RegExp('\QueueMemberStatus');

	//let str_rtp = new RegExp('\^RTCP.');	
	//console.log("################" , data.Event, "################");
	//console.log(data.Event, data);
	

	
	if(str_dialB.test(data.Event) && (data.ChannelStateDesc == 'Ring')){
		//console.log(data.Event, data);
		console.log('######## DAIL Begin #########');
		console.log(data.Event, data.ChannelStateDesc , data.CallerIDNum, data.DestChannelStateDesc, data.DestCallerIDNum);
		console.log();

	}else if(str_dialE.test(data.Event) && (data.ChannelStateDesc == 'Ring')){
		console.log('######## DAIL End #########');
		console.log(data.Event, data.ChannelStateDesc , data.CallerIDNum, data.DestChannelStateDesc, data.DestCallerIDNum, data.DialStatus);
		console.log();

	}else if(str_queueJ.test(data.Event)){
        console.log('######## Queue Join #########');
        console.log(data.Event, data.ChannelStateDesc, 'CallerID :', data.CallerIDNum, 'Queue :', data.Queue);
        console.log();

	}else if(str_queueMS.test(data.Event)){
        console.log('######## Queue MemberStatus ##########');
        //console.log(data.Event, 'Queue :', data.Queue, 'QueueMember :', data.MemberName);
        if(data.Status == '6'){
        	console.log(data.Event, 'Ringing');
        }else if(data.Status == '2'){
        	console.log(data.Event, 'Talk');
        }
        console.log();

    }else if(str_hangup.test(data.Event)){
		console.log('######## HANGUP #########');
		console.log(data.Event, data.ChannelStateDesc , data.CallerIDNum);
		console.log();
	}


	
});
