import express from 'express';
import colors from './config/colors';
import db from './config/database';
import ip from 'ip';
import clipboardy from 'clipboardy';
import common from './app/middlewares/common';
import {
    validateRegister
} from './app/middlewares/validator';
import api from './app/routes';
import * as CS from './app/scrapers';
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'amirali.ah77@gmail.com',
        pass: '139292aa'
    }
});

var mailOptions = {
    from: 'amirali.ah77@gmail.com',
    to: 'david@mailinator.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

//Setting Up Web Server
let app = express();
//Connecting To The Database
db();
// Setting Up Common Middlewares
common(app);

api(app);

CS.currencyScraper()

app.listen(3000, (err) => {
    console.log(
        (err) ? err : `http://localhost:3000\nhttp://${ip.address()}:3000`
    )
    if (!err) {
        clipboardy.write(`http://${ip.address()}:3000`)
            .then((res) => {
                console.log('\nURL copied to clipboard\n', );
            })
    }
})