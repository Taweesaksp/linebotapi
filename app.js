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

// const express = require('express')
// const bodyParser = require('body-parser')
// const request = require('request')
// const app = express()
// const port = process.env.PORT || 4000
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.post('/webhook', (req, res) => {
//     let reply_token = req.body.events[0].replyToken
//     let msg = req.body.events[0].message.text
//     reply(reply_token, msg)
//     res.sendStatus(200)
// })
// app.listen(port)
// function reply(reply_token, msg) {
//     let headers = {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer {UfC+kvnTY/FnCX4xlcvUS6rJpw5mPeqHw8inmF+He1FKVxAYvpo3yzIlpajMLq/nhi0j/w+P+nez4OKZtn0Wdd5uVTi7oQDPVCl/WbxpNlu4/rq9ZtSW4xCaChY9ZQCv6IZHznLJLFNoOD4j9CuM1gdB04t89/1O/w1cDnyilFU=}'
//     }
//     let body = JSON.stringify({
//         replyToken: reply_token,
//         messages: [{
//             type: 'text',
//             text: msg
//         }]
//     })
//     request.post({
//         url: 'https://api.line.me/v2/bot/message/reply',
//         headers: headers,
//         body: body
//     }, (err, res, body) => {
//         console.log('status = ' + res.statusCode);
//     });
// }


// const request = require('request')
// const port = process.env.PORT || 4000
// app.post('/webhook', function (req, res) {
//     var text = req.body.events[0].message.text;
//     var userId = "U93f0ab5384c81496cb14b0de52af58e9";
//     if (text == "Hello") {
//         var msg = [{
//             type: 'text',
//             text: 'สวัสดี'
//         }];
//         PushMessage(userId, text, msg);
//     } res.sendStatus(200);
// });
// app.listen(port)

// function PushMessage(userId, text, msg) {
//     let data = {
//         to: userId,
//         messages: msg
//     }

//     request({
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer {UfC+kvnTY/FnCX4xlcvUS6rJpw5mPeqHw8inmF+He1FKVxAYvpo3yzIlpajMLq/nhi0j/w+P+nez4OKZtn0Wdd5uVTi7oQDPVCl/WbxpNlu4/rq9ZtSW4xCaChY9ZQCv6IZHznLJLFNoOD4j9CuM1gdB04t89/1O/w1cDnyilFU=}'
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

// const express = require('express')
// const bodyParser = require('body-parser')
// const request = require('request')
// const app = express()
// const port = process.env.PORT || 4000
// console.log("****port***" + port);
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.post('/webhook', (req, res) => {
//     var text = req.body.events[0].message.text
//     let reply_token = req.body.events[0].replyToken
//     console.log("-----text----" + text);
//     console.log("-----reply_token----" + reply_token);
//     if (text == "a") {
//         // console.log("-----text----" + text);
//         reply(reply_token);
//         // PushMessage();
//     }
//     else {
//         PushMessage();
//     }
//     // var text = "88";
//     // var userId = "U93f0ab5384c81496cb14b0de52af58e9";
//     // let reply_token = req.body.events[0].replyToken
//     // let msg = "99"

//     // res.sendStatus(200)
//     res.send("aa");

// })
// app.listen(port)
// console.log("****88***" + port);
// function PushMessage() {
//     let data = {
//         "to": "U93f0ab5384c81496cb14b0de52af58e9",
//         "messages": [
//             {
//                 "type": "text",
//                 "text": "Music"
//             }
//         ]
//     }

//     request({
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer {UfC+kvnTY/FnCX4xlcvUS6rJpw5mPeqHw8inmF+He1FKVxAYvpo3yzIlpajMLq/nhi0j/w+P+nez4OKZtn0Wdd5uVTi7oQDPVCl/WbxpNlu4/rq9ZtSW4xCaChY9ZQCv6IZHznLJLFNoOD4j9CuM1gdB04t89/1O/w1cDnyilFU=}'
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

// function reply(reply_token) {
//     console.log("-----in--1--");
//     let headers = {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer {UfC+kvnTY/FnCX4xlcvUS6rJpw5mPeqHw8inmF+He1FKVxAYvpo3yzIlpajMLq/nhi0j/w+P+nez4OKZtn0Wdd5uVTi7oQDPVCl/WbxpNlu4/rq9ZtSW4xCaChY9ZQCv6IZHznLJLFNoOD4j9CuM1gdB04t89/1O/w1cDnyilFU=}'
//     }
//     let body = {
//         "replyToken": reply_token,
//         "messages": [
//             {
//                 "type": "text",
//                 "text": "Bnk"
//             },
//         ]
//     }
//     console.log("-----in--2--");
//     request.post({
//         headers: headers,
//         url: 'https://api.line.me/v2/bot/message/push',
//         body: body
//     }, function (err, res, body) {
//         if (err) console.log('error')
//         if (res) console.log('success')
//         if (body) console.log(body)
//     })
// }

// var express = require('express')
// var bodyParser = require('body-parser')
// var request = require('request')
// var app = express()

// app.use(bodyParser.json())

// app.set('port', (process.env.PORT || 4000))
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// app.post('/webhook', (req, res) => {
//     // var text = req.body.events[0].message.text
//     // var sender = "U93f0ab5384c81496cb14b0de52af58e9"
//     // var replyToken = req.body.events[0].replyToken
//     // console.log(text, sender, replyToken)
//     // console.log(typeof sender, typeof text)
//     // // console.log(req.body.events[0])
//     // if (text === 'สวัสดี' || text === 'Hello' || text === 'hello') {
//     //     sendText(sender, text)
//     // }
//     // res.sendStatus(200)

//     var text = req.body.events[0].message.text
//     var sender = req.body.events[0].source.userId
//     var replyToken = req.body.events[0].replyToken
//     console.log(text, sender, replyToken)
//     console.log(typeof sender, typeof text)
//     // console.log(req.body.events[0])
//     sendText(sender, text)
//     res.sendStatus(200)
// })

// function sendText(sender, text) {
//     let data = {
//         to: sender,
//         messages: [
//             {
//                 type: 'text',
//                 text: 'สวัสดีค่ะ เราเป็นผู้ช่วยปรึกษาด้านความรัก สำหรับหมามิ้น 💞'
//             }
//         ]
//     }
//     request({
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer UfC+kvnTY/FnCX4xlcvUS6rJpw5mPeqHw8inmF+He1FKVxAYvpo3yzIlpajMLq/nhi0j/w+P+nez4OKZtn0Wdd5uVTi7oQDPVCl/WbxpNlu4/rq9ZtSW4xCaChY9ZQCv6IZHznLJLFNoOD4j9CuM1gdB04t89/1O/w1cDnyilFU='
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

// app.listen(app.get('port'), function () {
//     console.log('run at port', app.get('port'))
// })




// var express = require('express')
// var bodyParser = require('body-parser')
// var request = require('request')
// var app = express()

// app.use(bodyParser.json())

// app.set('port', (process.env.PORT || 4000))
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// app.post('/webhook', (req, res) => {
//     var text = req.body.events[0].message.text
//     var sender = req.body.events[0].source.userId
//     var replyToken = req.body.events[0].replyToken
//     console.log(text, sender, replyToken)
//     console.log(typeof sender, typeof text)
//     // console.log(req.body.events[0])
//     sendText(sender, text)
//     res.sendStatus(200)
// })

// function sendText(sender, text) {
//     let data = {
//         to: sender,
//         messages: [
//             {
//                 type: 'text',
//                 text: text
//             }
//         ]
//     }
//     request({
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer UfC+kvnTY/FnCX4xlcvUS6rJpw5mPeqHw8inmF+He1FKVxAYvpo3yzIlpajMLq/nhi0j/w+P+nez4OKZtn0Wdd5uVTi7oQDPVCl/WbxpNlu4/rq9ZtSW4xCaChY9ZQCv6IZHznLJLFNoOD4j9CuM1gdB04t89/1O/w1cDnyilFU='
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

// app.listen(app.get('port'), function () {
//     console.log('run at port', app.get('port'))
// })

// var express = require('express')
// var bodyParser = require('body-parser')
// var request = require('request')
// var app = express()
// app.use(bodyParser.json())
// app.set('port', (process.env.PORT || 4000))
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// app.post('/webhook', function (req, res) {
//     var text = req.body.events[0].message.text;
//     var userId = req.body.events[0].source.userId;
//     if (text == "Hello") {
//         var msg = [{
//             type: 'text',
//             text: 'สวสัดีคะ่'
//         }];
//         PushMessage(userId, text, msg);
//     }
//     res.sendStatus(200);
// });

// function PushMessage(userId, text, msg) {
//     let data = {
//         to: userId,
//         messages: msg
//     }
//     var ChannelAccessToken = 'UfC+kvnTY/FnCX4xlcvUS6rJpw5mPeqHw8inmF+He1FKVxAYvpo3yzIlpajMLq/nhi0j/w+P+nez4OKZtn0Wdd5uVTi7oQDPVCl/WbxpNlu4/rq9ZtSW4xCaChY9ZQCv6IZHznLJLFNoOD4j9CuM1gdB04t89/1O/w1cDnyilFU=';
//     request({
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer {${ChannelAccessToken}}`
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
// app.listen(app.get('port'), function () {
//     console.log('run at port', app.get('port'))
// })

var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    var msgtxt = req.body.events[0].message.text;
    var text = msgtxt.toUpperCase();
    var sender = req.body.events[0].source.userId;
    var replyToken = req.body.events[0].replyToken;
    var timestamp = req.body.events[0].timestamp;
    var message = req.body.events[0].message.id;
    console.log(text, sender, replyToken);
    console.log(typeof sender, typeof text);



    //SIMPLE TEXT
    if (text === 'HELLO' || text === 'HI' || text === 'สวัสดี') {
        var textmsg = 'Wacoal Voice สวัสดีค่ะ';
        var msg = [{
            type: 'text',
            text: `Wacoal Voice สวัสดีค่ะ ${text}`
        }];
        sendText(sender, text, msg);
    }



    //SCREENSHOT FROM GOOGLE AND SEND BACK WITH IMAGE
    if (text === "GOOGLE") {
        const stream = screenshot('https://webapp2.wacoal.co.th/MOCMVC/ReportSaleData?getjobid=3&getjobtypeid=3&tdays=0', '1024x768', { crop: true, selector: '#SalesSummary' });
        stream.pipe(fs.createWriteStream(`./public/stylesheets/${timestamp}.png`));
        var msg = [{
            type: 'image',
            originalContentUrl: `https://wacoalvoice.herokuapp.com/stylesheets/${timestamp}.png`,
            previewImageUrl: `https://wacoalvoice.herokuapp.com/stylesheets/${timestamp}.png`
        }, {
            type: 'text',
            text: `Capture Success`
        }];
        sendText(sender, text, msg);
    }

    //CAROUSEL IMAGE
    if (text === 'วาโก้บลูม') {
        var textmsg = 'ต้อนรับวัยใสด้วย Wacoal Bloom เหมาะสำหรับเด็กช่วงเข้าสู่วัยรุ่น \n ให้น้องมั่นใจวาโก้บลูม ไม่ต้องกลุ้มอีกต่อไป ~';
        var msg = [{
            "type": "template",
            "altText": "this is a buttons template",
            "template": {
                "type": "buttons",
                "thumbnailImageUrl": "https://image.ibb.co/kUpbXa/wacoalbloom.png",
                "title": "Wacoal Bloom",
                "text": "See Information",
                "actions": [
                    {
                        "type": "uri",
                        "label": "Facebook",
                        "uri": "https://www.facebook.com/wacoalbloom/"
                    },
                    {
                        "type": "uri",
                        "label": "Watch Video",
                        "uri": "https://www.youtube.com/watch?v=T5sSa64-aKQ"
                    }
                ]
            }
        }];
        sendText(sender, text, msg);
    }

    res.sendStatus(200);
});


function sendText(sender, text, msg) {
    let data = {
        to: sender,
        messages: msg
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
