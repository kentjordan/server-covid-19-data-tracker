import 'module-alias/register';

import express, { Express } from "express";
import dashboard from "@routes/dashboard";
import countries from "@routes/countries";

const app: Express = express();
const PORT = 7777;

app.use("/", dashboard);
app.use("/countries", countries);

// TODO:
//      1) Make a function for the downloading the latest data from source

app.listen(PORT, () => {
    console.log(`\n* Server is now started at localhost:${PORT}\n\n`);
})