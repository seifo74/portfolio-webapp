const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configure your SMTP settings here
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seifvjvf@gmail.com', // your Gmail address
      pass: 'bqndrpsxviaikbuj'   // your Gmail app password
    }
  });

  const mailOptions = {
    from: email,
    to: 'seifvjvf@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
