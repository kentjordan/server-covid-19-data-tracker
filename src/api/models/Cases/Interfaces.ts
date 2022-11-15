export interface CountryDetails {
    country_code: string
    country_name: string,
}

// Individual case of Country for each date
export interface Case {
    date: string,
    total_cases: number;
    new_cases: number;
    new_cases_smoothed: number;
    total_cases_per_million: number;
    new_cases_per_million: number;
    new_cases_smoothed_per_million: number;
}

// All of the country's cases, only includes the associated with cases information
export interface CountriesCases {
    cases: Array<Case>
}

export interface TotalCases extends CountryDetails {
    date: string,
    total_cases: number
}