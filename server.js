const jsonServer = require('json-server')
const port = process.env.PORT || 4000;
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(port);