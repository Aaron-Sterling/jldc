// show help message

import chalk from 'chalk';

export function showHelpMessage(message: string) {
    console.log(chalk.greenBright.underline('Help in depth'));
    console.log(message);
}