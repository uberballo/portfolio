require('dotenv').config()

const server = require('./backend/server')

const PORT = process.env.PORT || 4000

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`))