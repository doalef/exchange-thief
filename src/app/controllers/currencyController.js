import CS from './../models/currency';

export let submitDollar = async (dollar) => {
    if (Number(dollar) !== NaN) {
        let lastDollar = await CS.find
        let newDollar = await new CS({
            name: 'dollar',
            value: dollar,
        });
        await newDollar.save();
        return newDollar;
    } else {
        return;
    }
    
}

export let submitDirham = async (dirham) => {
    if (Number(dirham) !== NaN) {
        let submitDirham = await new CS({
            name: 'dirham',
            value: dirham,
        });
        await submitDirham.save();
        return submitDirham;
    } else {
        return;
    }
    
}

export let submitEuro = async (euro) => {
    if (Number(euro) !== NaN) {
        let newEuro = await new CS({
            name: 'euro',
            value: euro,
        });
        await newEuro.save();
        return newEuro;
    } else {
        return;
    }
    
}

export let submitPound = async (pound) => {
    if (Number(pound) !== NaN) {
        let newPound = await new CS({
            name: 'pound',
            value: pound,
        });
        await newPound.save();
        return newPound;
    } else {
        return;
    }
    
}