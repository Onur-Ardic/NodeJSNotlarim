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
