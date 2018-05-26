import express from 'express';
let pageRouter = express.Router();
import * as CS from './../controllers/currencyController';

export default () => {
    pageRouter.route('/')
        .get((req,res) => {
            CS.getMainPageData()
                .then((value) => {
                    res.status(200).render('index',value);
                }).catch((err) => {
                    res.send(500);
                })
            
        });
    
    return pageRouter;
}