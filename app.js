const express = require('express')
const redis = require('redis')

const app = express()
const port = 3000

// Connect to Redis using the Redis container hostname
const client = redis.createClient({
  socket: {
    host: '172.19.0.2',
    port: '6379',
  },
})

;(async () => {
  try {
    await client.connect()
    console.log('Connected to Redis')
  } catch (error) {
    console.error('Error connecting to Redis:', error)
    process.exit(1)
  }
})()

// Sample route to set a key-value pair in Redis
app.get('/set/:key/:value', async (req, res) => {
  const key = req.params.key
  const value = req.params.value

  try {
    await client.set(key, value)
    res.send(`Successfully set key: ${key}, value: ${value}`)
  } catch (error) {
    console.error('Error setting key:', error)
    res.status(500).send('Internal Server Error')
  }
})

// Sample route to get a key-value pair from Redis
app.get('/get/:key', async (req, res) => {
  const key = req.params.key

  try {
    const value = await client.get(key)
    if (value === null) {
      res.send('Key not found')
    } else {
      res.send(`Key: ${key}, Value: ${value}`)
    }
  } catch (error) {
    console.error('Error getting key:', error)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
