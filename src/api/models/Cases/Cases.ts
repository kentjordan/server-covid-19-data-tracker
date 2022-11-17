
import Data, { CoutriesCode, getLatestWorldData } from '@services/data';
import { Case, CountriesCases, TotalCases } from '@interfaces/models/cases/ICase';

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

const getIntlConfirmedCases: () => Case = () => {

    const latest_world_data = getLatestWorldData();

    return {
        date: latest_world_data.date,
        total_cases: latest_world_data.total_cases,
        new_cases: latest_world_data.new_cases,
        new_cases_smoothed: latest_world_data.new_cases_smoothed,
        total_cases_per_million: latest_world_data.total_cases_per_million,
        new_cases_per_million: latest_world_data.new_cases_per_million,
        new_cases_smoothed_per_million: latest_world_data.new_cases_smoothed_per_million
    }
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
