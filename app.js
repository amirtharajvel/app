const express = require('express')

let app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})
app.listen(8080, '0.0.0.0')

process.on('uncaughtException', (e) => {
  console.error(e) // try console.log if that doesn't work
  process.exit(10)
})
