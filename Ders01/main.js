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
