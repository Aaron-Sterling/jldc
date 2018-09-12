// Task message creator

import chalk from 'chalk';

export function taskMessage(message: string): string {
    const returnMessage = '\n' + chalk.blueBright.underline('Starting task') + '\n' + message;
    return returnMessage;
}