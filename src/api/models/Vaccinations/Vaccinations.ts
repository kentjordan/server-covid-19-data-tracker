import Data, { getLatestWorldData } from '@services/data'
import { TotalDeaths, Death } from "@interfaces/models/deaths/IDeaths";
import { IVaccination } from '@interfaces/models/vaccinations/IVaccinations'

const getCountriesTotalVaccination: () => Array<TotalDeaths> = () => {

    const deaths: Array<TotalDeaths> = [];

    for (const key in Data) {

        const country_code = key;
        const country = Data[country_code];

        deaths.push({
            date: country.data[country.data.length - 1].date as string,
            total_deaths: country.data[country.data.length - 1].total_deaths as number,
            country_code: country_code,
            country_name: country.location
        }); ``
    }

    return deaths;
}

const getIntlConfirmedVaccinations: () => IVaccination = () => {

    const latest_world_data = getLatestWorldData();

    return {
        date: latest_world_data.date,
        total_vaccinations: latest_world_data.total_vaccinations,
        people_vaccinated: latest_world_data.people_vaccinated,
        people_fully_vaccinated: latest_world_data.people_fully_vaccinated,
        total_boosters: latest_world_data.total_boosters,
        total_vaccinations_per_hundred: latest_world_data.total_vaccinations_per_hundred,
        people_vaccinated_per_hundred: latest_world_data.people_vaccinated_per_hundred,
        people_fully_vaccinated_per_hundred: latest_world_data.people_fully_vaccinated_per_hundred,
        total_boosters_per_hundred: latest_world_data.total_boosters_per_hundred,
    }
}

const Deaths = () => { }

export {
    Deaths as default,
    getCountriesTotalVaccination,
    getIntlConfirmedVaccinations,
}