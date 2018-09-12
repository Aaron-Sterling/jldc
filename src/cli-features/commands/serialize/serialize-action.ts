// serialize action

import { injectable } from 'inversify';
import { sourceOpTarget } from '../utils/source-op-target';
import { validateSourceTarget } from '../../../core-providers/file-services/file-validators/validate-source-target';
import { promises as jsonld, ToRdfOptions } from 'jsonld';
import { taskMessage } from '../utils/task-message';
import { cancelMessage } from '../utils/cancellation-message';
import { DEFAULT_TARGET_FILE } from '../utils/default-target-file';
         
const DEFAULT_OPTIONS: ToRdfOptions = {format: 'application/n-quads'};        

@injectable()
class SerializeAction {

    serializeAction(sourceFile: string, targetFile: string = DEFAULT_TARGET_FILE) {

        const options = DEFAULT_OPTIONS;
        const   SERIALIZE_TASK_MESSAGE = '(1)  Serialize the contents of ' + sourceFile + ' to RDF\n' +
                                         '(2)  then write the result to ' + targetFile + '.';
        // let noCompactArrays: boolean;
        console.log(taskMessage(SERIALIZE_TASK_MESSAGE));

        validateSourceTarget({name: sourceFile, title: 'source file'}, {name: targetFile, title: 'target file'})
             .then(validated => { if (validated) {
                                                  sourceOpTarget<string>(sourceFile, targetFile, jsonld.toRDF, options, 'Serializing...');
                                                 }
                                  else { cancelMessage('Serialization') }
                                });
    }
}

export { SerializeAction };
