const express = require('express')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const bodyParser = require('body-parser')
const multer = require('multer')
const config = require('../nuxt.config.js')
const time = require('./middleware/time')

const oauth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URL)

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
})

const accessToken = oauth2Client.getAccessToken()

config.dev = !(process.env.NODE_ENV === 'production')

const mailer = express()

/**
 * To take you to the HTML form page
 */
mailer.use(express.Router('/mailer'))
/**
 * Extended being true means POSTing "nested object" is allowed
 * e.g., client[name] = 'Jon Doe'
 */
mailer.use(
  bodyParser.urlencoded({
    extended: true
  })
)

/**
 * multer (built on top of busboy) helps load attachment by user
 * /tmp/ is a temporary folder to store attachments in order to attach
 * them to the email sent by user
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/tmp/')
  },
  // using a unique name to allow multiple attachments at once
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${time()}`)
  }
})
const up = multer({ storage })

const transporter = nodemailer.createTransport({
  service: process.env.NODEMAILER_SERVICE,
  auth: {
    type: 'OAuth2',
    user: process.env.NODEMAILER_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken
  }
})

mailer.post('/send-email', up.array('img'), (request, response) => {
  const data = request.body

  // if user uploads multiple images, push them to toUpload
  // and assign a name + path for each
  const toUpload = []
  for (const item in request.files) {
    toUpload.push({
      filename: request.files[item].originalname,
      path: request.files[item].path
    })
  }

  const attachmentNotify = toUpload.length > 0 ? `*${data.name} included photos with this email.` : ''

  const mailOptions = {
    from: data.email,
    replyTo: data.email,
    to: process.env.NODEMAILER_USER,
    subject: `omaraziz.xyz: ${data.name}`,
    attachments: toUpload,
    html: `Email: ${data.email}<br/>
    <br/>${data.msg}<br/><br/>
    <em>${attachmentNotify}</em>`
  }

  // To verify if transporter is working
  toUpload.length > 0 ? console.log(attachmentNotify) : console.log('No attachments')
  transporter.verify((error, success) => {
    if (error) {
      console.log(`Configuration error: ${error}`)
    }
    console.log(`Configuration valid: ${success}`)
    console.log(data)
  })

  // Try to send email
  transporter.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response)
  })
  transporter.close()

  // Redirect to /success page after sending mail then .end() response
  response.writeHead(301, { Location: '/success' })
  response.end()
})

module.exports = mailer
