// Loads JSON from a source, performs an operation on it, then stores the result in a target file

import { JsonLdObject, JsonLd, promises } from 'jsonld';
import { readJsonLdFile, writeJsonLdFile } from '../../../core-providers/file-services/read-write-file';
import { JsonLdOperation } from '../../../models/json-ld-operation';
import { promise as oraSpinner } from 'ora';

export function sourceOpTarget<T>(source: string, target: string, operation: JsonLdOperation<T>, options: any, opMessage: string) {
    oraSpinner(_sourceOpTarget<T>(source, target, operation, options), opMessage);
}

function _sourceOpTarget<T>(source: string, target: string, operation: JsonLdOperation<T>, options: any): Promise<boolean> {
    
    let startingJson: JsonLdObject;
    let afterOperationApplied: T;
    
    return readJsonLdFile(source)
              .then(res => {
                            if (!res) { return false }
                            else      { 
                                       startingJson = res;
                                       return performOperation();
                                      }
                           });

    function performOperation(): Promise<boolean> {  
        return operation(startingJson, options)
                        .then(res => {
                                      afterOperationApplied = res;
                                      return writeTargetFile();
                                     })
                        .catch(err => false); 
    }

    // target file write
    function writeTargetFile(): Promise<boolean> {
        return writeJsonLdFile<T>(target, afterOperationApplied)
                 .then(_ => true)
                 .catch( () => false);
    }
}