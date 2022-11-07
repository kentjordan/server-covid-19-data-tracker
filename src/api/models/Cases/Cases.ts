
import Data, { CoutriesCode } from '@services/data';
import { CountriesCases, TotalCases } from './Interfaces';

const CountriesTotalCases: () => Array<TotalCases> = () => {

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

const InternationalCase = () => {

    const countries_total_cases: Array<TotalCases> = CountriesTotalCases();
    let intl_total_case: number = 0;

    for (let i = 0; i < countries_total_cases.length; i++) {

        const country_total_cases = countries_total_cases[i].total_cases === undefined ? 0 : countries_total_cases[i].total_cases;
        intl_total_case += country_total_cases;
    }

    return {
        date: new Date().toDateString(),
        intl_total_case: intl_total_case,
    };
}

const Cases: () => CountriesCases = () => {


    return {
        cases: []
    }

}

export {
    Cases as default,
    CountriesTotalCases,
    InternationalCase
};
