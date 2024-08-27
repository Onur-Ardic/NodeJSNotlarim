## NodeJS Notlarım

- Node.JS Sunucu tarafında işlem yapmak için kullanılan bir Javascript kütüphanesidir.

## HTTP SERVER OLUŞTURMA

```bash
var http = require('http')

var server = http.createServer((req, res) => {
res.end()
});  // Burada Request ve Response işlemlerini yapıyoruz




server.listen(8080, function () { // 8080 portunda çalışacak
  console.log('Server is running on port 8080')
})

```

## HTTP STATUS CODE

- 200 : Gelen veya giden istek başarılı olduğunda 200 kodu döner
- 400 : Client tarafında oluşan hatalarda 400 döner
- 404 : Kullanıcının gitmek istediği sayfa bulunmadığında 404 döner
- 500 : 500 ve üzeri hatalar ise server tarafında bir problem olduğunu ifade eder

## Routing Requests

- Url bilgisine göre istek atmak için ;

```bash
var http = require('http')

function requestListener(req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`
   <html>
        <head>
             <title>anasayfa</title>
        </head>

         <body>
               <h1>Anasayfa</h1>
         </body>
</html>
        `)

    res.end()
  }
}

var server = http.createServer(requestListener)

server.listen(8080, function () {
  console.log('Server is running on port 8080')
})

```

- Bir HTML sayfasını renderlamak için;
-       FS modülünü require etmemiz gerekiyor

```bash
var http = require('http')
var fs = require('fs')

function requestListener(req, res) {
  if (req.url == '/') {
    fs.readFile('index.html', (error, html) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(html)
      res.end()
    })
  } else if (req.url == '/blog') {
    fs.readFile('blog.html', (error, html) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(html)
      res.end()
    })
  } else {
    res.writeHead(404)
    res.end('404: Not Found')
  }
}

var server = http.createServer(requestListener)

server.listen(8080, function () {
  console.log('Server is running on port 8080')
})

```

## ExpressJS Giriş

- ExpressJS, Node.JS ile geliştirilen bir web frameworkudur. Express.js’nin sunduğu sınırsız HTTP yardımcı araçları ve katmanlar sayesinde sağlam bir API oluşturmak oldukça hızlı ve kolaydır.

* Kurulum

```bash
npm install express
----------------------
//app.js

const express = require('express')
const app = express()

app.use((req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

```

## Middleware

- Middleware, bir HTTP isteğinin işlenmesi sırasında herhangi bir noktada çalışan kod parçacığıdır.

```bash
const express = require('express')
const app = express()

app.use((req, res, next) => {  // bir sonraki middleware'e geçmek için next() fonksiyonunu çağırmamız gerekiyor
  next()
  console.log('Middleware 1')
})

app.use((req, res) => {
  console.log('Middleware 2')
  res.end('Sonlandı')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

```

## ExpressJS Routing

- Routing, bir web uygulamasında farklı URL'lere farklı işlemler yapmak için kullanılır.

```bash
const express = require('express')
const app = express()

app.use('/Blogs/:blogid/users/:username', (req, res) => { // sıralama burada önemli en özel sayfa en üstte olmalı
  console.log(req.params.blogid)
  console.log(req.params.username)
  res.send('blog detay sayfası')
})

app.use('/Blogs', (req, res) => {
  res.send('Blogs')
})

app.use('/', (req, res) => {
  res.send('Anasayfa')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

```

- Path Module ile dosya yollarını kullanmak

```bash
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

```

- Static Dosyaların Dışarıya Açılması

```bash
const express = require('express')
const app = express()
const path = require('path')

app.use('/libs', express.static(path.join(__dirname, 'node_modules'))) // /libs/bootstrap/dist/css/bootstrap.min.css
app.use('/static', express.static(path.join(__dirname, 'public'))) // public klasörünüde dışarıya açtık

app.use('/blogs/:blogid/', (req, res) => {
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

```
