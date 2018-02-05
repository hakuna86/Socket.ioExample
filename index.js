const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})

io.on('connection', (socket) => {
    socket.emit('news', { hello : 'world'});
    socket.on('my other event', (data) => {
        console.log(data);
    })
})