const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/api/form', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
		<h3>Contact Details</h3>
		<ul>
			<li>Name: ${req.body.name}</li>
			<li>Email: ${req.body.email}</li>
		</ul>
		<h3>Message</h3>
		<p>${req.body.message}</p>
		`

		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			auth: {
				user: 'csgabkawebdev@gmail.com',
				pass: 'pvogxssmpaszguez'

			}
		})

		let mailOptions = {
			from: 'test@testaccount.com',
			to: 'csgabkawebdev@gmail.com',
			replyTo: '',
			subject: 'Email from csgabkawebdev.co.uk',
			text: req.body.message,
			html: htmlEmail
		};

		transporter.sendMail(mailOptions, (err, info) => {
			if(err) {
				return console.log(err)
			}
			console.log('Message send: %s', info.message)
			console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
		});
	});
})

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})