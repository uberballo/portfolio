const app = require('./app')
require('dotenv').config()


const PORT = process.env.PORT || 3003

app.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`))