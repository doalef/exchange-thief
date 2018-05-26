import * as CC from './../controllers/currencyController';
import scrapeIt from 'scrape-it';

let parseNumber = (str) => {
    str = str.replace(',' , '');
    str = str.replace(',' , '.');
    return (Number(str))
}


export let currencyScraper = () => {
    setInterval(() => {
        scrapeIt("http://www.2gheroon.ir/", {
            dollar: "#_v3_40",
            euro: "#_v3_41",
            pound: "#_v3_42",
            dirham: "#_v3_43"
        }).then(({
            data,
            response
        }) => {
            if (response.statusCode == 200) {
                console.log(data);
                CC.submitDollar(parseNumber(data.dollar));
                CC.submitEuro(parseNumber(data.euro));
                CC.submitPound(parseNumber(data.pound));
                CC.submitDirham(parseNumber(data.dirham));
            }
        }).catch((err) => {
            console.log(err)
        })
    },900000)
}