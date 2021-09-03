const express = require('express')
const app = express()

const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/:name?/:lang?', (req, res) => {
  const name = req.params.name
  const lang = req.params.lang

  const showMessage = false

  const products = [
    { name: 'Doritos', price: 3.14 },
    { name: 'Coca-Cola', price: 5 },
    { name: 'Leite', price: 4.5 },
    { name: 'Carne', price: 29 },
    { name: 'Nescau', price: 4 },
  ]

  res.render('index', {
    name,
    lang,
    company: 'LAB1',
    salary: 990,
    message: showMessage,
    products
  })
})

app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/profile', (req, res) => {
  res.render('main/profile')
})

app.listen(PORT, () => {
  console.log(`Servidor iniciado em: http://localhost:${PORT} 🔥`)
})
