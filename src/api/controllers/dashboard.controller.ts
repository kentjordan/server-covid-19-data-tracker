import { Request, Response } from 'express';

import Cases, {
    getCountriesTotalCases,
    getIntlConfirmedCases
} from '@models/Cases/Cases';

import Deaths, {
    getCountriesTotalDeaths,
    getIntlConfirmedDeaths,
} from '@models/Deaths/Deaths';
import { getIntlConfirmedVaccinations } from '@models/Vaccinations/Vaccinations';

// GETS
const DashboardData = (req: Request, res: Response) => {

    res.json({
        date: getIntlConfirmedCases().date,
        total_cases: getIntlConfirmedCases().total_cases,
        new_cases: getIntlConfirmedCases().new_cases,
        total_deaths: getIntlConfirmedDeaths().total_deaths,
        new_deaths: getIntlConfirmedDeaths().new_deaths,
        total_vaccinations: getIntlConfirmedVaccinations().total_vaccinations,
        total_boosters: getIntlConfirmedVaccinations().total_boosters,
        people_vaccinated: getIntlConfirmedVaccinations().people_vaccinated,
        people_fully_vaccinated: getIntlConfirmedVaccinations().people_fully_vaccinated,
        historical_data: {},
    });

}

export {
    DashboardData as default,
};
