const express = require("express")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")


let mailer = express();
mailer.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' localhost:* ws://localhost:*;");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    console.log("###############################################");
    next();
})
mailer.use(express.Router("/mailer"));

mailer.use(
    bodyParser.urlencoded({
        extended: true
    })
)

async function main() {
    mailer.post("/send-email", (req, res) => {
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "obinsalamah@gmail.com", // your email
                pass: "" // your pass
            }
        });

        const data = req.body;
        let mailOptions = {
            from: data.email,
            to: "obinsalamah@gmail.com", // send to who?
            // text: data.name,
            html: `<button>${data.name}</button>`
        };

        transporter.sendMail(mailOptions, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log();
            }
            console.log("Message %s sent: %s", info.messageId, info.res);
            console.log(res);
            console.log(req.body);
            console.log(mailOptions);
        });
        res.writeHead(301, {
            Location: "/mailer"
        });
        res.send();
    });
}

main().catch(console.error);
main();

module.exports = mailer