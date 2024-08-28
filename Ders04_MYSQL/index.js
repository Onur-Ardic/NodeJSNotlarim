const express = require('express')
const app = express()
const path = require('path')
const userRouter = require('./routes/user')
app.set('view engine', 'ejs')

app.use('/libs', express.static(path.join(__dirname, 'node_modules'))) // /libs/bootstrap/dist/css/bootstrap.min.css
app.use('/static', express.static(path.join(__dirname, 'public'))) // public klasörünüde dışarıya açtık
app.use(userRouter)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
