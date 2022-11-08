
import Data, { CoutriesCode } from '@services/data';
import { CountriesCases, TotalCases } from './Interfaces';

const getCountriesTotalCases: () => Array<TotalCases> = () => {

    const cases: TotalCases[] = [];

    for (const key in Data) {

        const country = Data[key];

        cases.push({
            date: country.data[country.data.length - 1].date,
            country_code: key,
            country_name: country.location,
            total_cases: country.data[country.data.length - 1].total_cases,
        });
    }

    return cases;
}

const getIntlConfirmedCases = () => {

    const countries_total_cases: Array<TotalCases> = getCountriesTotalCases();
    let intl_confirmed_cases: number = 0;

    // Sum of all country's confirmed cases
    for (let i = 0; i < countries_total_cases.length; i++) {

        const country_total_cases = countries_total_cases[i].total_cases === undefined ? 0 : countries_total_cases[i].total_cases;
        intl_confirmed_cases += country_total_cases;
    }

    return {
        date: new Date().toDateString(),
        intl_confirmed_cases: intl_confirmed_cases,
    };
}

const Cases: () => CountriesCases = () => {

    return {
        cases: []
    }

}

export {
    Cases as default,
    getCountriesTotalCases,
    getIntlConfirmedCases
};
