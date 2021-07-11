const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const compression = require('compression')
const { CONNECTION_URL, PORT } = require('./config')
const apiRouter = require('./routes/apiVideos')

const app = express()

app.use(express.json())
app.use(cors())
app.use(compression())

app.use('/api/', apiRouter)

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('conected to mongoDB'))
  .catch((error) => console.log(`${error} did not connect`))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
