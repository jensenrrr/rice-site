const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({
  origin: true,
});

const inquiryEmail = functions.config().email.inquiry;
const writingEmail = functions.config().email.writing;
const blogEmail = functions.config().email.blog;
const botEmail = functions.config().email.bot;

const password = functions.config().email.password;

const mailTransport = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: inquiryEmail,
    pass: password,
  },
});

exports.submit = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.end();
  } else {
    cors(req, res, () => {
      if (req.method !== "POST") {
        return;
      }

      const email =
        req.body.contentType === "Professional Inquiry"
          ? inquiryEmail
          : req.body.contentType === "Book Review"
          ? writingEmail
          : req.body.contentType === "Blog Comment"
          ? blogEmail
          : botEmail;

      const mailOptions = {
        from: botEmail,
        replyTo: req.body.email,
        to: email,
        subject: `${req.body.contentType}: ${req.body.name}`,
        text: req.body.content,
        html: `<p>${req.body.content}</p>`,
      };

      return mailTransport
        .sendMail(mailOptions)
        .then(() => {
          res.status(200).send({
            isEmailSend: true,
          });
          return;
        })
        .catch((err) => {
          res.status(400);
          return;
        });
    });
  }
});
