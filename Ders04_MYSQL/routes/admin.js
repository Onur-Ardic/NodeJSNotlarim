const express = require('express')
const router = express.Router()

router.use('/blog/create', function (req, res) {
  res.render('admin/blog-create')
})

router.post('/blog/create', async function (req, res) {
  const title = req.body.title
  const description = req.body.description
  const image = req.body.image

  try {
    await db.execute('INSERT INTO blog (title, description, image) VALUES (?, ?, ?)', [
      title,
      description,
      image,
    ])
  } catch (error) {
    console.log(error)
  }
  res.redirect('/')
})

router.use('/blogs/:blogid', function (req, res) {
  res.render('admin/blog-edit')
})

router.use('/blogs', function (req, res) {
  res.render('admin/blog-list')
})

module.exports = router
