const app = require('./app')
const http = require('http')
require('dotenv').config()


const PORT = process.env.PORT || 3003

const server = http.createServer(app)

server.listen(() => {
  console.log(`Server running on port ${PORT}`);
  console.log(`url: http://localhost:${PORT}`);
});