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

// const server = require('express');
// const PORT = process.env.PORT || 4000;
// const request = require('request');
// const bodyParser = require('body-parser');

// server()
//   .use(bodyParser.json())
//   .use(bodyParser.urlencoded({ extended: false }))
//   .get('/', (req, res) => res.send(`Hi there! This is a nodejs-line-api running on PORT: ${PORT}`))
//   // เพิ่มส่วนของ Webhook เข้าไป
//   .post('/webhook', function (req, res) {
//     let replyToken = req.body.events[0].replyToken;
//     let msg = req.body.events[0].message.text;

//     console.log(`Message token : ${replyToken}`);
//     console.log(`Message from chat : ${msg}`);

//     res.json({
//       status: 200,
//       message: `Webhook is working!`
//     });
//   })
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));

var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()

app.use(bodyParser.json())

app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
console.log("แปะ");

app.post('/webhook', (req, res) => {
  var text = req.body.events[0].message.text
  var sender = req.body.events[0].source.userId
  var replyToken = req.body.events[0].replyToken
  console.log(text, sender, replyToken)
  console.log(typeof sender, typeof text)
  // console.log(req.body.events[0])
  if (text === 'สวัสดี' || text === 'Hello' || text === 'hello') {
    sendText(sender, text)
  }
  res.sendStatus(200)
})

console.log("แปะ");

function sendText(sender, text) {
  let data = {
    to: sender,
    messages: [
      {
        type: 'text',
        text: 'สวัสดีค่ะ เราเป็นผู้ช่วยปรึกษาด้านความรัก สำหรับหมามิ้น 💞'
      }
    ]
  }
  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {UfC+kvnTY/FnCX4xlcvUS6rJpw5mPeqHw8inmF+He1FKVxAYvpo3yzIlpajMLq/nhi0j/w+P+nez4OKZtn0Wdd5uVTi7oQDPVCl/WbxpNlu4/rq9ZtSW4xCaChY9ZQCv6IZHznLJLFNoOD4j9CuM1gdB04t89/1O/w1cDnyilFU=}'
    },
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    body: data,
    json: true
  }, function (err, res, body) {
    if (err) console.log('error')
    if (res) console.log('success')
    if (body) console.log(body)
  })
}

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})
