const express = require('express')
const connection = require('./database/database')
const app = express()
const Question = require('./database/Question')

connection
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com o banco de dados')
  })
  .catch(error => {
    console.log(error)
  })
const PORT = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  Question.findAll({ raw: true, order: [['id', 'DESC']] })
    .then(questions => {
      res.render('index', {
        questions
      })
    })
})

app.get('/toask/:id?', (req, res) => {
  const { id } = req.params

  if (!id) {
    res.render('toAsk')
  } else {
    Question.findOne({ 
      where: { id }
    }).then(question => {
      question ? res.render('question', { question }) : res.redirect('/')
    })
  }
})

app.post('/savequestion', (req, res) => {
  const { title, description } = req.body

  if (title.trim() && description.trim()) {
    Question.create({
      title,
      description
    }).then(() => res.redirect('/'))
  } else {
    res.redirect('/toask')
  }
})

app.get('/profile', (req, res) => {
  res.render('main/profile')
})

app.listen(PORT, () => {
  console.log(`Servidor iniciado em: http://localhost:${PORT} 🔥`)
})
