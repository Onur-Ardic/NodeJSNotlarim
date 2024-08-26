var http = require('http')

function requestListener(req, res) {
  res.end()
}

var server = http.createServer(requestListener)

server.listen(8080, function () {
  console.log('Server is running on port 8080')
})
