const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Rota inicial')
})

app.get('/blog/:article?', (req, res) => {
  const article = req.params.article

  article
    ? res.send(`Artigo: ${article}`)
    : res.send('Rota de blog')
})

app.get('/profile/github', (req, res) => {
  const repository = req.query['repository']

  if (repository) res.send(`Repositório: ${repository}`)
  else res.send('Meu perfil no github: https://github.com/immichjs')
})

app.get('/hello/:name/:company', (req, res) => {
  const name = req.params.name
  const company = req.params.company
  res.send(`Hello, ${name}, da ${company}`)
})

app.listen(3000, error => error ? console.log(`Ocorreu um erro ${error}`) : console.log('Servidor online em: http://localhost:3000'))
