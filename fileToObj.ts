
import fs from 'node:fs';

const fileContent: string = fs.readFileSync('./data/owid-covid-data.json', 'utf-8');

const fileContentObj = JSON.parse(fileContent);

const prettyfiedJSON = JSON.stringify(fileContentObj, null, 2);

fs.writeFile('./data/prettyfied/owid-covid-data..prettyfied.json', prettyfiedJSON, 'utf-8', () => console.log('Writing Done!!'));
