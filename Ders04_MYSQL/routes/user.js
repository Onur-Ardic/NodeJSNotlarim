const express = require('express')
const router = express.Router()
const path = require('path')

router.use('/blogs/:blogid/', (req, res) => {
  console.log(req.params.blogid)
  console.log(req.params.username)
  res.sendFile(path.join(__dirname, '../views/users', 'blog-details.html'))
})

router.use('/blogs', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/users', 'blogs.html'))
})

router.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/users', 'index.html'))
})

module.exports = router
