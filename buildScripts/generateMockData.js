/*
This script generates mock data for local development so we don't have to
point to an actual API, but can enjoy realistic and randomized data. Page
loads are faster due to using local, static data.
 */

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema.js';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', () => require('faker'));

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
