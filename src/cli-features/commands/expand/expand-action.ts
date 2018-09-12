// expand action

import { injectable } from 'inversify';
import { sourceOpTarget } from '../utils/source-op-target';
import { validateSourceTarget } from '../../../core-providers/file-services/file-validators/validate-source-target';
import { promises as jsonld, JsonLd, ExpandOptions } from 'jsonld';
import { taskMessage } from '../utils/task-message';
import { cancelMessage } from '../utils/cancellation-message';
import { DEFAULT_TARGET_FILE } from '../utils/default-target-file';

const DEFAULT_OPTIONS: ExpandOptions = {};
                           

@injectable()
class ExpandAction {

    expandAction(sourceFile: string, targetFile: string = DEFAULT_TARGET_FILE) {

        const options = DEFAULT_OPTIONS;
        const EXPAND_TASK_MESSAGE = '(1)  Run the expand algorithm on ' + sourceFile + '\n' +
                                    '(2)  then write the output to ' + targetFile + '.';
        // let noCompactArrays: boolean;
        console.log(taskMessage(EXPAND_TASK_MESSAGE));

        validateSourceTarget({name: sourceFile, title: 'source file'}, {name: targetFile, title: 'target file'})
             .then(validated => { if (validated) {
                                                  sourceOpTarget<JsonLd>(sourceFile, targetFile, jsonld.expand, options, 'Expand algorithm');
                                                 }
                                  else { cancelMessage('Expand algorithm') }
                                });
    }
}

export { ExpandAction };






