// main context action

import { injectable } from 'inversify';
import { sourceModifierOperation } from '../utils/source-mod-op-target';
import { validateSourceModifierTarget } from '../../../core-providers/file-services/file-validators/validate-source-mod-target';
import { promises as jsonld, CompactOptions, JsonLd } from 'jsonld';
import { taskMessage } from '../utils/task-message';
import { cancelMessage } from '../utils/cancellation-message';
import { DEFAULT_TARGET_FILE } from '../utils/default-target-file';

const DEFAULT_OPTIONS: CompactOptions = {};
                             

@injectable()
class CompactAction {

    compactAction(sourceFile: string, contextFile: string, targetFile: string = DEFAULT_TARGET_FILE, options: CompactOptions = DEFAULT_OPTIONS) {

        const COMPACT_TASK_MESSAGE = '(1)  Run the compact algorithm on ' + sourceFile + '\n' +
                                     '(1a) using context in ' + contextFile + '\n' +
                                     '(2)  then write the output to ' + targetFile + '.';
        console.log(taskMessage(COMPACT_TASK_MESSAGE));
        if (!options.compactArrays) {
            console.log('No-compact-arrays option selected.');
        }
        validateSourceModifierTarget({name: sourceFile, title: 'source file'}, {name: contextFile, title: 'context file'}, {name: targetFile, title: 'target file'})
             .then(validated => { if (validated) {
                                                  sourceModifierOperation<JsonLd>(sourceFile, contextFile, targetFile, jsonld.compact, options, 'Compact algorithm');
                                                 }
                                  else { cancelMessage('Compact algorithm'); }
                                });
    }
}

export { CompactAction };






