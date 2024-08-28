const express = require('express')
const app = express()
const path = require('path')
const userRouter = require('./routes/user')
const configDB = require('./config')
app.set('view engine', 'ejs')

const mysql = require('mysql2')
let connection = mysql.createConnection(configDB.db)

connection.connect((err) => {
  if (err) throw err
  console.log('Connected to the MySQL server.')
})

app.use('/libs', express.static(path.join(__dirname, 'node_modules'))) // /libs/bootstrap/dist/css/bootstrap.min.css
app.use('/static', express.static(path.join(__dirname, 'public'))) // public klasörünüde dışarıya açtık
app.use(userRouter)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
