// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 4000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .get('/cool', (req, res) => res.send(cool()))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`))

// const express = require('express')
// const app = express()
// const port = process.env.PORT || 4000
// app.post('/webhook', (req, res) => res.sendStatus(200))
// app.listen(port)

/**
 * @author Pamontep Panya
 * @email pamontep.p@gmail.com
 * @create date 2018-06-03 03:45:02
 * @modify date 2018-06-03 03:45:02
 * @desc A sample project of Node.js and Line API
*/
const server = require('express');
const PORT = process.env.PORT || 4000;
const request = require('request');
const bodyParser = require('body-parser');

server()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .get('/', (req, res) => res.send(`Hi there! This is a nodejs-line-api running on PORT: ${PORT}`))
  // เพิ่มส่วนของ Webhook เข้าไป
  .post('/webhook', function (req, res) {
    let replyToken = req.body.events[0].replyToken;
    let msg = req.body.events[0].message.text;

    console.log(`Message token : ${replyToken}`);
    console.log(`Message from chat : ${msg}`);

    res.json({
      status: 200,
      message: `Webhook is working!`
    });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
