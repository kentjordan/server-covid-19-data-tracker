import WorldData from '@interfaces/WorldData'

import fs from 'node:fs';
import path from 'node:path'
import getProjectRootDir from '@root/root.dir';

const DATA_PATH: string = path.join(getProjectRootDir, '/data/owid-covid-data.json');

const Data: Object = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const CoutriesCode = Object.keys(Data);

const getCountryData = (countryCode: string) => {

    for (const key in Data) {
        if (key === countryCode) {
            return Data[countryCode];
        }
    }

    return -1;

}

const getLatestWorldData: () => WorldData = () => {

    const world_data = Data['OWID_WRL'].data;

    return world_data[world_data.length - 1];
}

export {
    Data as default,
    CoutriesCode,
    getCountryData,
    getLatestWorldData,
}
