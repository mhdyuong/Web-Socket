// the server has code for receiving messages and sending them out to clients
//the server program has a socket

// import the express module
var express = require('express');
var app = express();
//bind the particular express obj to port 3000
var server = app.listen(3000);
//heres the static files to show
app.use(express.static('public'));
//import the socket.io module, the server one
var socket = require('socket.io');
//create a socket for a particular port
var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log('new connection: ' + socket.id);
  socket.on('mouse', mouseMsg);

  function mouseMsg(data){
      socket.broadcast.emit('mouse', data);
      console.log(data);
  }
}



console.log("My socket server is running!");