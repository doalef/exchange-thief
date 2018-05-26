import express from 'express';
let Router = express.Router();
import scrapeIt from 'scrape-it';

let parseNumber = (str) => {
    str = str.replace(',' , '');
    str = str.replace(',' , '.');
    return (Number(str))
}

export default () => {
    Router.route('/get/dollar')
        .get((req, res) => {

        })
        .post((req,res) => {
            const { startDate , EndDate } = req.body;
        });

    Router.route('/get/dollar/live')
        .get((req, res) => {
            scrapeIt("http://www.2gheroon.ir/", {
                dollar: "#_v3_40",
                euro: "#_v3_41",
                pound: "#_v3_42",
                dirham: "#_v3_43"
            }).then(({
                data,
                response
            }) => {
                res.status(response.statusCode).json(data)
            })
        })
        .post((req,res) => {
            const { startDate , EndDate } = req.body;
        });

    Router.route('/get/pound')
        .get((req,res) => {

        })
        .post((req, res) => {
            const { startDate , EndDate } = req.body;
        })

    Router.route('/get/pound/live')
        .get((req,res) => {
            scrapeIt("http://www.2gheroon.ir/", {
                pound: "#_v3_42",
            }).then(({
                data,
                response
            }) => {
                console.log(data);
                res.status(response.statusCode).json({
                    date: new Date(),
                    data
                })
            })
        })
        .post((req, res) => {
            const { startDate , EndDate } = req.body;
        })

    Router.route('/get/combo/live')
        .get((req,res) => {
            scrapeIt("http://www.2gheroon.ir/", {
                dollar: "#_v3_40",
            }).then(({
                data,
                response
            }) => {
                console.log(data);
                res.status(response.statusCode).json({
                    date: new Date(),
                    data
                })
            })
        })
        .post((req, res) => {
            const { startDate , EndDate } = req.body;
        });

    return Router;
}