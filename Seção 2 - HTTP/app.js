let http = require('http')

http.createServer((req, res) => {
  const user = {
    name: 'Mich',
    age: 19,
    technologies: ['javascript', 'node.js', 'Vue.js', 'GraphQL', 'SQL Server', 'MySQL']
  }
  res.end(JSON.stringify(user))
}).listen(3000)

console.log('Server: http://localhost:3000')
