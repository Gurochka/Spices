const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('server/db.json')
const middlewares = jsonServer.defaults()
const db = require('./db.json')
var bodyParser = require('body-parser')

server.use(middlewares)
server.use(bodyParser.json())

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})