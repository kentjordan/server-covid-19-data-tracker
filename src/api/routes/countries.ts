import express, { Request, Response } from 'express';

import { middleware } from 'types/global_types';

const countries = express.Router();

const initRoute: middleware = (req, res, next) => {

    // Slice each country and make a file of it as .json, then save to /data/countries/<country_name>.json
    // Create a new folder for every new update of covid-data.json file and place it inside of that folder.

    // const data = fs.readFileSync('./data/owid-covid-data.json', 'utf-8');

    // const countriesAlpha3Codes = [];

    // let i = 0;

    // for (const key in JSON.parse(data)) {
    //     countriesAlpha3Codes.push(key);
    //     i++;
    // }
    // res.json({countriesAlpha3Codes});

    // fs.mkdir(path.join(getPWD, `/data/countries/${new Date().toDateString()}`), { recursive: true }, (err) => {

    //     res.send('atInitRoute')

    //     if(err === null){
    //         console.log('File Successfuly Made!');
    //         return
    //     }

    // })

    next();
}

countries.get('/', initRoute, (req: Request, res: Response) => {
    res.send('At /countries');
});

const getCountriesAlpha3Codes = (): string[] => {


    return []
}

export default countries;
