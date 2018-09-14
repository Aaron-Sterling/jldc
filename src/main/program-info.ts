// show program info


import figlet from 'figlet';
import chalk from 'chalk';
import { Settings } from '../models/settings-model';
import { getSettings } from '../core-providers/settings-service/settings-info';

const TITLE = 'JSON-LD CLI tool for NodeJS\n' + 
              '(C) 2018 by Aaron Sterling\n'

export function showProgramInfo() {
    figlet.text('JLDC', (err, res) => { 
                                       if (!err) { console.log(chalk.greenBright(res)); }
                                       showInfo(getSettings());
                                      })
}

function showInfo(settings: Settings) {
    console.log(chalk.greenBright(TITLE));
    console.log('Version: ', settings.version);
    console.log('License: ', settings.license);
    console.log('Repository: ', settings.repository);
}