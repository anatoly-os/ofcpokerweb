const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const time = require('./timeNow');

app.get('/', function (req, res) {
    console.log('index.html request');
    res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', function (req, res) {
    console.log('style.css request');
    res.sendFile(__dirname + '/style.css');
});

io.on('connection', function (socket) {    
    console.log(time.timeNow() + ' a user connected');
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', function () {
        console.log(time.timeNow() + ' user disconnected'); 
 }); 
});
 
console.log('port = ', process.env.PORT);
server.listen(process.env.PORT || 3000);
console.log('Server Started!');