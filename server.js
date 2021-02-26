import express from 'express'
import http from 'http'
import createGame from './public/game.js'
import  { Server }  from 'socket.io'

const app = express()
const server = http.createServer(app)
const sockets = new Server(server)

app.use(express.static('public'))

const game = createGame()            
game.addPlayer({ playerId: 'player1', playerX: 0, playerY: 0 })
game.addFruit({ fruitId: 'fruit1', fruitX: 5, fruitY: 5 })
game.addFruit({ fruitId: 'fruit2', fruitX: 8, fruitY: 7 })

sockets.on('connection', (socket) => {
    const playerId = socket.id

    console.log(playerId)
})

server.listen(8080, ()=> {
    console.log('> Server listening on port: 8080')
})