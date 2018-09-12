// asks the user to confirm file overwrite

import { prompt, Question } from 'inquirer';
import chalk from 'chalk';


// resolves to true if the user confirms to overwrite the file
// resolves to false otherwise
export function confirmOverwrite(fileToOverwrite: string): Promise<boolean> {
    
    type Answer = { fileConfirmation: boolean };
    console.log('\n' + chalk.magentaBright.underline('Warning') + '\nFile ' + fileToOverwrite + ' exists.')
    const message = 'Are you sure you want to overwrite it? (y/N) ';
    let question: Question<string> = {
        type: 'confirm',
        name: 'fileConfirmation',
        default: 'N',
        message: message
    }
    return prompt<string>(question).then( val => {
                                                   const answer: Answer = JSON.parse(JSON.stringify(val));
                                                   return answer.fileConfirmation;
                                                 });
}
