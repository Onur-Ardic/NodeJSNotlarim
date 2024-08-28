const configDB = require('../config')

const mysql = require('mysql2')
let connection = mysql.createConnection(configDB.db)

connection.connect((err) => {
  if (err) throw err
  console.log('Connected to the MySQL server.')
})

module.exports = connection.promise()
