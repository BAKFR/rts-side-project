
import express from 'express';
import http from 'http';
import socket_io from 'socket.io';

let app = express();
let server = http.Server(app);
let io = socket_io(server);


app.use(express.static('./static'));

app.use('/client.js', (req, res) => res.sendFile(`${__dirname}/client.js`));


io.on('connection', function(socket){
    console.log('User connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

server.listen(3000, function(){
    console.log('listening on *:3000');
});
