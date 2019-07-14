const express = require("express")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")
const multer = require('multer')
const time = require('./middleware/time')

const config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

let mailer = express();

mailer.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' localhost:* ws://localhost:*;");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    // console.log("-");
    next();
})

mailer.use(express.Router("/mailer"));
mailer.use(
    bodyParser.urlencoded({
        extended: true
    })
);

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${time()}`)
    }
})
let up = multer({
    storage: storage
});

let transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
});

mailer.post("/send-email", up.array('img'), (req, res) => {

    const data = req.body;

    let toUpload = [];
    for (const item in req.files) {
        toUpload.push({
            filename: req.files[item].originalname,
            path: req.files[item].path
        });
    };

    let attachmentNotify = toUpload.length > 0 ? `*${data.name} included photos with this email.` : '';

    let mailOptions = {
        from: `Site: ${data.email}`,
        to: "xyz.omaraziz@gmail.com",
        subject: `Email from ${data.name}`,
        html: `
            Sender's name: ${data.name}<br/>
            Sender's email: ${data.email}<br/>
            <br/>Sender's message:<br/><br/>${data.msg}
            <br/><br/>
            <em>${attachmentNotify}</em>
            <br/>
            `,
        attachments: toUpload
    };

    // console.log(toUpload);


    // To verify if transporter is working
    // transporter.verify((err, success) => {
    //     if (err) console.log(`Verify error: ${err}`);
    //     console.log('Config is valid');
    // })


    transporter.sendMail(mailOptions, (err, req, res, next) => {
        if (err) {
            console.log(`Caught ERROR!: ${err}`);
        } else {
            console.log(`Success, email was send to ${mailOptions.to}`);
        }
    });
    res.writeHead(301, {
        Location: "/mailer"
    });
    res.send();
});

module.exports = mailer