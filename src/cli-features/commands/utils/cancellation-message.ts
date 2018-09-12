// task cancellation message

import chalk from 'chalk';

export function cancelMessage(taskName: string) {
    const cancelMessage = '\n' + taskName + ' canceled.';
    console.log(chalk.redBright(cancelMessage));
}