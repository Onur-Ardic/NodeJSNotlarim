const express = require('express')
const app = express()
const path = require('path')

app.use('/blogs/:blogid/', (req, res) => {
  // sıralama burada önemli en özel sayfa en üstte olmalı
  console.log(req.params.blogid)
  console.log(req.params.username)
  res.sendFile(path.join(__dirname, 'views/users', 'blog-details.html'))
})

app.use('/blogs', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/users', 'blogs.html'))
})

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/users', 'index.html'))
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
