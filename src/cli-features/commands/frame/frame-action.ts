// frame action

import { injectable } from 'inversify';
import { sourceModifierOperation } from '../utils/source-mod-op-target';
import { validateSourceModifierTarget } from '../../../core-providers/file-services/file-validators/validate-source-mod-target';
import { promises as jsonld, FrameOptions } from 'jsonld';
import { taskMessage } from '../utils/task-message';
import { cancelMessage } from '../utils/cancellation-message';
import { DEFAULT_TARGET_FILE } from '../utils/default-target-file';

const DEFAULT_OPTIONS: FrameOptions = {};
                             

@injectable()
class FrameAction {


    frameAction(sourceFile: string, frameFile: string, targetFile: string = DEFAULT_TARGET_FILE) {

        const options = DEFAULT_OPTIONS;
        const FRAME_TASK_MESSAGE =   '(1)  Run the frame algorithm on ' + sourceFile + '\n' +
                                     '(1a) using frame in ' + frameFile + '\n' +
                                     '(2)  then write the output to ' + targetFile + '.';
        let taskResult: boolean;
        // let noCompactArrays: boolean;
        console.log(taskMessage(FRAME_TASK_MESSAGE));

        validateSourceModifierTarget({name: sourceFile, title: 'source file'}, {name: frameFile, title: 'frame file'}, {name: targetFile, title: 'target file'})
             .then(validated => { if (validated) {
                                                  sourceModifierOperation(sourceFile, frameFile, targetFile, jsonld.frame, options, 'Frame algorithm');
                                                 }
                                  else { cancelMessage('Frame algorithm') }
                                });
    }
}

export { FrameAction };




