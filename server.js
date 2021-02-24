const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

app.get('/', (req, res) => res.send("Hello World"));

const server = http.Server(app);
server.listen(3000);

const io = socketIo(server);

io.on('connection', (socket) => {
    socket.emit('hello', {
        greeting: 'Hello John'
    });
});