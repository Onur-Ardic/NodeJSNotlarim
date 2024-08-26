## NodeJS Notlarım

- Node.JS Sunucu tarafında işlem yapmak için kullanılan bir Javascript kütüphanesidir.

## HTTP SERVER OLUŞTURMA

```bash
var http = require('http')

function requestListener(req, res) {   // Burada Request ve Response işlemlerini yapıyoruz
  res.end()
}

var server = http.createServer(requestListener) // burada bir server açıyoruz ve server a request listener adında bir function tanımlıyoruz

server.listen(8080, function () { // 8080 portunda çalışacak
  console.log('Server is running on port 8080')
})

```
