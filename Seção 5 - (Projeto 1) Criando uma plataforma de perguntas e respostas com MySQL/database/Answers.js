const Sequelize = require('sequelize')
const connection = require('./database')

const Answers = connection.define('answers', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
})
