const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Middleware 1')
  next()
})

app.use((req, res) => {
  console.log('Middleware 2')
  res.end('Sonlandı')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
