const express = require('express')
const app = express()

const data = {
  title: 'Anasayfa',
  description: 'Bu bir açıklama metnidir.',

  categories: [
    {
      name: 'Kategori 1',
      description: 'Bu bir açıklama metnidir.',
    },
    {
      name: 'Kategori 2',
      description: 'Bu bir açıklama metnidir.',
    },
  ],
}

app.set('view engine', 'ejs')

const path = require('path')

app.use('/', (req, res) => {
  res.render(path.join(__dirname, 'index'), data)
})

app.listen(3000, () => {
  console.log('Server 3000 portunda çalışıyor')
})

// Hata yakalama için
process.on('uncaughtException', (err) => {
  console.error('Yakalanmamış istisna:', err)
  process.exit(1)
})
