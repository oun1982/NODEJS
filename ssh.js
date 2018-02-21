
var SSH = require('simple-ssh');
var ssh = new SSH ({host: '192.168.66.124',
                   user: 'root',
                   pass: 'osd_SIP4321!'
                   });

ssh.exec('mysql -uroot -ppassword goldfish -e "select * from agenttraffic where ringdate between \'2017-01-01 00:00:00:00\' and \'2017-01-09 23:59:00\'"',{
          out: function(stdout){
          console.log(stdout);
        }
}).start();

ssh.exec('ls -lrt /usr/src', {
          out: function(stdout) {
          console.log(stdout);
          }
}).start();

