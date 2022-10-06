const express = require("express");
const app = express();
const cors = require('cors');
const port = 3001;
require("dotenv").config();

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sendSMS", (req, res) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: "Congratulations everyone!",
      from: "+18782313945",
      to: "+17786834132",
    })
    .then((message) => console.log(message.sid));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
