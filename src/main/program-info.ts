// show program info

import { readFile } from 'fs';
import { promisify } from 'util';
import figlet from 'figlet';
import chalk from 'chalk';

const readFilePromise = promisify(readFile);
const PACKAGE_JSON_PATH = 'package.json';
const TITLE = 'JSON-LD CLI tool for NodeJS\n' + 
              '(C) 2018 by Aaron Sterling\n'

export function showProgramInfo() {
    figlet.text('JLDC', (err, res) => { 
                                       if (!err) { console.log(chalk.greenBright(res)); }
                                       readFilePromise(PACKAGE_JSON_PATH, 'utf8')
                                          .then(info => showInfo(JSON.parse(info)))
                                          .catch(_ => showInfo({}))
                                      })
}

function showInfo(packageJSON: any) {
    const version = (packageJSON.version as string) || 'Version information not available.';
    const license = (packageJSON.license as string) || 'License not available.';
    const repository = (packageJSON.repository as string) || 'Repository not available.'
    console.log(chalk.greenBright(TITLE));
    console.log('Version: ',version);
    console.log('License: ',license);
    console.log('Repository: ',repository);
}