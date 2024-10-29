const express = require('express')
const app = express()
var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();

const port = 3001


app.get('/', (req, res) => {
  console.log(command)
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})