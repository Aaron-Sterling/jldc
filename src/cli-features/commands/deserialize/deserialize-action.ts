// deserialize action

import { injectable } from 'inversify';
import { sourceOpTarget } from '../utils/source-op-target';
import { validateSourceTarget } from '../../../core-providers/file-services/file-validators/validate-source-target';
import { promises as jsonld, JsonLd, JsonLdObject, FromRdfOptions } from 'jsonld';
import { taskMessage } from '../utils/task-message';
import { cancelMessage } from '../utils/cancellation-message';
import { DEFAULT_TARGET_FILE } from '../utils/default-target-file';

const DEFAULT_OPTIONS: FromRdfOptions = {format: 'application/n-quads'};
                           

@injectable()
class DeserializeAction {

    deserializeAction(sourceFile: string, targetFile: string = DEFAULT_TARGET_FILE) {

        const options = DEFAULT_OPTIONS;
        const   DESERIALIZE_TASK_MESSAGE = '(1)  Deserialize the contents of ' + sourceFile + ' from RDF\n' +
                                           '(2)  then write the result to ' + targetFile + '.';
        // let noCompactArrays: boolean;
        console.log(taskMessage(DESERIALIZE_TASK_MESSAGE));

        const deserialize = (val: JsonLdObject) => jsonld.fromRDF(JSON.stringify(val));
        validateSourceTarget({name: sourceFile, title: 'source file'}, {name: targetFile, title: 'target file'})
             .then(validated => { if (validated) {
                                                  sourceOpTarget<JsonLd>(sourceFile, targetFile, deserialize, options, 'Deserializing...');
                                                 }
                                  else { cancelMessage('Deserialization') }
                                });
    }
}

export { DeserializeAction };
