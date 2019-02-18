const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const time = require('./timeNow');
import { CardDeck } from './cardsEngine';

app.get('/', function (req, res) {
    console.log('index.html request');
    res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', function (req, res) {
    console.log('style.css request');
    res.sendFile(__dirname + '/style.css');
});

let cardDeck;

io.on('connection', function (socket) {    
    console.log(time.timeNow() + ' a user connected');
    socket.on('deal cards', function() {
        const cards3 = cardDeck.dealCards(3);
        io.emit('cards dealt', 
        [ cards3[0].longName(),
          cards3[1].longName(),
          cards3[2].longName() ]);
    });
    socket.on('start game', function () {
        console.log('Start Game!');
        cardDeck = new CardDeck();
    });
    socket.on('disconnect', function () {
        console.log(time.timeNow() + ' user disconnected'); 
 }); 
});
 
console.log('port = ', process.env.PORT);
server.listen(process.env.PORT || 3000);
console.log('Server Started!');