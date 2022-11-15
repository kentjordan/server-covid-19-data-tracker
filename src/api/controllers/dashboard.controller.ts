import { Request, Response } from 'express';

import Cases, {
    getCountriesTotalCases,
    getIntlConfirmedCases
} from '@models/Cases/Cases';

import Deaths, {
    getCountriesTotalDeaths,
    getIntlConfirmedDeaths,
} from '@models/Deaths/Deaths';

// GETS
const DashboardData = (req: Request, res: Response) => {

    res.json({
        total_cases: getIntlConfirmedCases().total_cases,
        total_deaths: getIntlConfirmedDeaths().total_deaths,
    });

}

export {
    DashboardData as default,
};
