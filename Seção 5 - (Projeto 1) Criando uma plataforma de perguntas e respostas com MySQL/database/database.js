const Sequelize = require('sequelize')

const connection = new Sequelize('ask_node', 'root', 'Immich.js@997905964', { 
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection
