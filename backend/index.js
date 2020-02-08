const app = require('./app')
const http = require('http')
const config = require('./utils/config')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
  console.log(`url: http://localhost:${config.PORT}`)
});