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

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'amirali.ah77@gmail.com',
//         pass: '139292aa'
//     }
// });

// var mailOptions = {
//     from: 'amirali.ah77@gmail.com',
//     to: 'amirali.binq@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

//Setting Up Web Server
let app = express();
//Connecting To The Database
db();
// Setting Up Common Middlewares
common(app);
app.use(express.static(__dirname + '/app/public'));
app.set('views', 'src/app/views');
app.set('view engine', 'ejs');

api(app);

CS.currencyScraper()

app.listen(process.env.PORT || 3000, (err) => {
    console.log(
        (err) ? err : `http://${ip.address()}:${process.env.PORT || 3000}`
    )
})
