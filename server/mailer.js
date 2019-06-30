const express = require("express")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")

const config = require('../nuxt.config.js')

let app = express();
app.use(function (req, res, next) {
  res.setHeader("Content-Security-Policy", "script-src 'self' localhost:* ws://localhost:*;");
  return next();
})
app.use(express.static("../pages/mailer"));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json());

app.post("", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "obinsalamah@gmail.com", // your email
      pass: "$Ig0tthis1" // your pass
    }
  });

  const data = req.body;
  let mailOptions = {
    // from: "",
    to: "", // send to who?
    text: data.name
  };

  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Message %s sent: %s", info.messageId, info.res);
      console.log(res);
      console.log(req.body);
      console.log(mailOptions);
    }
  });
  res.writeHead(301, {
    Location: "../pages/mailer/index.vue"
  });
  res.send();
});

let server = app.listen(8081, function () {
  let port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});
