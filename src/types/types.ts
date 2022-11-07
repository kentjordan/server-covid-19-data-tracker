
export type HistoryCases = Array<Cases>
export type HistoryDeaths = Array<Deaths>

export interface HistoryRecovered {

}

export interface HistoryVaccinated {

}

export interface Dashboard {
    totalCase: number,
    totalDeaths: number,
    totalRecovered: number,
    totalVaccinated: number,
    top_5_countries: object[],
    history: {
        cases: HistoryCases,
        deaths: HistoryDeaths,
        vaccinated: HistoryVaccinated,
        recovered: HistoryRecovered,
    }
}