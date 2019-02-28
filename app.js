// const express = require('express')
// const request2 = require('request')
// const app = express()
// const port = process.env.PORT || 4000
// app.post('/webhook', (req, res) => res.sendStatus(200))
// app.listen(port)

// /**
//  * @author Pamontep Panya
//  * @email pamontep.p@gmail.com
//  * @create date 2018-06-03 03:45:02
//  * @modify date 2018-06-03 03:45:02
//  * @desc A sample project of Node.js and Line API
// */
// const server = require('express');
// const PORT = process.env.PORT || 4000;
// const request = require('request');
// const bodyParser = require('body-parser');

// server()
//     .use(bodyParser.json())
//     .use(bodyParser.urlencoded({ extended: false }))
//     .get('/', (req, res) => res.send(`Hi there! This is a nodejs-line-api running on PORT: ${PORT}`))
//     .listen(PORT, () => console.log(`Listening on ${PORT}`));

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    let msg = req.body.events[0].message.text
    reply(reply_token, msg)
    res.sendStatus(200)
})
app.listen(port)
function reply(reply_token, msg) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {UfC+kvnTY/FnCX4xlcvUS6rJpw5mPeqHw8inmF+He1FKVxAYvpo3yzIlpajMLq/nhi0j/w+P+nez4OKZtn0Wdd5uVTi7oQDPVCl/WbxpNlu4/rq9ZtSW4xCaChY9ZQCv6IZHznLJLFNoOD4j9CuM1gdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: msg
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}


// const request = require('request')
// const port = process.env.PORT || 4000
// app.post('/webhook', (req, res) => {
//     var text = req.body.events[0].message.text;
//     var userId = req.body.events[0].source.userId;
//     if (text == "Hello") {
//         var msg = [{
//             type: 'text',
//             text: 'สวสัดี'
//         }]; PushMessage(userId, text, msg);
//     } res.sendStatus(200);
// });
// app.listen(port)

// function PushMessage(userId, text, msg) {
//     let data = {
//         to: userId,
//         messages: msg
//     }
//     var ChannelAccessToken = 'UfC+kvnTY/FnCX4xlcvUS6rJpw5mPeqHw8inmF+He1FKVxAYvpo3yzIlpajMLq/nhi0j/w+P+nez4OKZtn0Wdd5uVTi7oQDPVCl/WbxpNlu4/rq9ZtSW4xCaChY9ZQCv6IZHznLJLFNoOD4j9CuM1gdB04t89/1O/w1cDnyilFU=';
//     request({
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer {${ChannelAccessToken}}'
//         },
//         url: 'https://api.line.me/v2/bot/message/push',
//         method: 'POST',
//         body: data,
//         json: true
//     }, function (err, res, body) {
//         if (err) console.log('error')
//         if (res) console.log('success')
//         if (body) console.log(body)
//     })
// } 