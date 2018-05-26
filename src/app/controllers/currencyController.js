import CS from './../models/currency';

export let submitDollar = async (dollar) => {
    if (Number(dollar) !== NaN) {
        let lastDollar = await CS.findOne({
            name: 'dollar'
        }).sort({
            createdAt: -1
        });
        if (lastDollar && lastDollar.value === dollar) {
            return;
        } else {
            console.log(lastDollar);
            let newDollar = await new CS({
                name: 'dollar',
                value: dollar,
            });
            await newDollar.save();
            return newDollar;
        }
    } else {
        return;
    }

}

export let submitDirham = async (dirham) => {
    if (Number(dirham) !== NaN) {
        let lastDirham = await CS.findOne({
            name: 'dirham'
        }).sort({
            createdAt: -1
        });
        if (lastDirham && lastDirham.value === dirham) {
            return;
        } else {
            let submitDirham = await new CS({
                name: 'dirham',
                value: dirham,
            });
            await submitDirham.save();
            return submitDirham;
        }
    } else {
        return;
    }

}

export let submitEuro = async (euro) => {
    if (Number(euro) !== NaN) {
        let lastEuro = await CS.findOne({
            name: 'dirham'
        }).sort({
            createdAt: -1
        });
        if (lastEuro && lastEuro.value === euro) {
            return;
        } else {
            let newEuro = await new CS({
                name: 'euro',
                value: euro,
            });
            await newEuro.save();
            return newEuro;
        }
    } else {
        return;
    }

}

export let submitPound = async (pound) => {
    let lastPound = await CS.findOne({
        name: 'dirham'
    }).sort({
        createdAt: -1
    });
    if (Number(pound) !== NaN) {
        if (lastPound && lastPound.value === pound) {
            return
        } else {
            let newPound = await new CS({
                name: 'pound',
                value: pound,
            });
            await newPound.save();
            return newPound;
        }
    } else {
        return;
    }

}

export let getMainPageData = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let dollar = await CS.findOne({
                name: 'dollar'
            }).sort({
                createdAt: -1
            }).lean();
            let pound = await CS.findOne({
                name: 'pound'
            }).sort({
                createdAt: -1
            }).lean();
            let euro = await CS.findOne({
                name: 'euro'
            }).sort({
                createdAt: -1
            }).lean();
            let dirham = await CS.findOne({
                name: 'dirham'
            }).sort({
                createdAt: -1
            }).lean();
            resolve({
                dollar: dollar.value,
                dirham: dirham.value,
                pound: pound.value,
                euro: euro.value,
            })
        } catch (error) {
            reject(error.message);
        }
    })
}