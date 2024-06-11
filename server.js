const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let visitorCount = 0;

io.on('connection', (socket) => {
    visitorCount++;
    io.emit('visitorUpdate', visitorCount);

    socket.on('disconnect', () => {
        visitorCount--;
        io.emit('visitorUpdate', visitorCount);
    });
});

app.use(express.static('public'));

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
