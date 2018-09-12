// error handler

import { FileErrorType } from './file-error-types';
import chalk from 'chalk';

export function displayError(error: FileErrorType, spec: string) {
    const message = '\n' + chalk.redBright.underline('Error') + '\n' + spec + ': ' + error;
    console.log(message);
}