const express = require('express')
const router = express.Router()
const path = require('path')

const db = require('../data/db')
router.use('/blogs/:blogid/', (req, res) => {
  console.log(req.params.blogid)
  console.log(req.params.username)
  res.sendFile(path.join(__dirname, '../views/users', 'blog-details.html'))
})

router.get('/blogs/:blogid/', (req, res) => {
  console.log(req.params.blogid)
  res.sendFile(path.join(__dirname, '../views/users', 'blog-details.html'))
})

router.get('/blogs', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/users', 'blogs.html'))
})

router.get('/', (req, res) => {
  db.execute('SELECT * FROM blog')
    .then((result) => {
      res.render(path.join(__dirname, '../views/users', 'index'), { blogs: result[0] })
    })
    .catch((err) => {
      console.log(err)
    })
})
module.exports = router
