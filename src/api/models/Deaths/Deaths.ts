import Data, { getLatestWorldData } from '@services/data'
import { TotalDeaths, Death } from "./Interfaces";


const getCountriesTotalDeaths: () => Array<TotalDeaths> = () => {

    const deaths: Array<TotalDeaths> = [];

    for (const key in Data) {

        const country_code = key;
        const country = Data[country_code];

        deaths.push({
            date: country.data[country.data.length - 1].date as string,
            total_deaths: country.data[country.data.length - 1].total_deaths as number,
            country_code: country_code,
            country_name: country.location
        });
    }

    return deaths;
}

const getIntlConfirmedDeaths: () => Death = () => {

    const latest_world_data = getLatestWorldData();

    return {
        date: latest_world_data.date,
        total_deaths: latest_world_data.total_deaths,
        new_deaths: latest_world_data.new_deaths,
        new_deaths_smoothed: latest_world_data.new_cases_smoothed,
        total_deaths_per_million: latest_world_data.total_deaths_per_million,
        new_deaths_per_million: latest_world_data.new_deaths_per_million,
        new_deaths_smoothed_per_million: latest_world_data.new_deaths_smoothed_per_million
    }
}

const Deaths = () => { }

export {
    Deaths as default,
    getCountriesTotalDeaths,
    getIntlConfirmedDeaths,
}