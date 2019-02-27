const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

// const express = require('express')
// const app = express()
// const port = process.env.PORT || 4000
// app.post('/webhook', (req, res) => res.sendStatus(200))
// app.listen(port)
