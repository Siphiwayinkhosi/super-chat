const express = require('express');
const http = require('http');
const { Server } = require('socket.io'); 

const app = express();

const httpServer = http.createServer(app); 
const io = new Server(httpServer, {  
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log('we are connected');

    socket.on("chat", (chat) => {
        io.emit('chat', chat); 
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
});

httpServer.listen(5000, () => console.log('Listening to port 5000'));
