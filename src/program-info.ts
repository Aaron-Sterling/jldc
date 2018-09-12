// show program info

import { readFileSync } from 'fs';
import figlet from 'figlet';
import chalk from 'chalk';

const PACKAGE_JSON_PATH = '../package.json';
const TITLE = 'JSON-LD CLI tool for NodeJS\n' + 
              '(C) 2018 by Aaron Sterling\n'

export function showProgramInfo() {
    figlet.text('JLDC', (err, res) => { 
                                       if (!err) { console.log(chalk.greenBright(res)); }
                                       showInfo(); 
                                      })
}

function showInfo() {
    const packageJSON = JSON.parse(readFileSync(PACKAGE_JSON_PATH, 'utf8'));
    const version = (packageJSON.version as string) || 'Version information not available.';
    const license = (packageJSON.license as string) || 'License not available.';
    const repository = (packageJSON.repository as string) || 'Repository not available.'
    console.log(chalk.greenBright(TITLE));
    console.log('Version: ',version);
    console.log('License: ',license);
    console.log('Repository: ',repository);
}