let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})
app.listen(8080, () => {
  console.log('Simple web app running on port 8080')
})
