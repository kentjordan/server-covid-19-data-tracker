export interface CountryDetails {
    country_code: string
    country_name: string,
}

export interface Death {
    date: string,
    total_deaths: number,
    new_deaths: number,
    total_deaths_per_million: number,
    new_deaths_per_million: number,
    new_deaths_smoothed_per_million: number,
    new_deaths_smoothed: number,
}

export interface CountryCases {
    deaths: Array<Death>,
}

export interface TotalDeaths extends CountryDetails {
    date: string,
    total_deaths: number,
}