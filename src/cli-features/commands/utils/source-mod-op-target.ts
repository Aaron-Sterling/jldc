// a helper function
// accepts 4 parameters
// source file, modifier file, operation, target file
// it reads from the source and modifier files
// then it performs the operation on those two sets of data
// finally, it stores the result of the operation in the target file
//
// resolves to true if everything went well
// resolves to false otherwise
// displays an error if it encounters a condition that will cause it to resolve to false

import { JsonLdObject, JsonLd } from 'jsonld';
import { readJsonLdFile, writeJsonLdFile } from '../../../core-providers/file-services/read-write-file';
import { JsonLdModifierOperation } from '../../../models/json-ld-operation';
import { promise as oraSpinner } from 'ora';



export function sourceModifierOperation<T>(source: string, modifier: string, target: string, operation: JsonLdModifierOperation<T>, options : any, opName: string) {
    oraSpinner(_sourceModifierOperation<T>(source, modifier, target, operation, options), 'Running ' + opName);
}

function _sourceModifierOperation<T>(source: string, modifier: string, target: string, operation: JsonLdModifierOperation<T>, options: any): Promise<boolean> {

    let startingJson: JsonLdObject;
    let modifierToUse: JsonLdObject;
    let afterOperationApplied: T;
    
    // source file read, and main return statement
    return readJsonLdFile(source)
              .then(res => {
                            if (!res) { return false }
                            else      { 
                                       startingJson = res;
                                       return readModifierFile();
                                      }
                           });

    // modifier file read
    function readModifierFile(): Promise<boolean> {
        return readJsonLdFile(modifier)
                    .then(res => {
                                  if (!res) { return false }
                                  else { 
                                        modifierToUse = res;
                                        return performOperation();
                                       }
                         });
    }

    // now perform the main JSON-LD operation
    // note: we need to wrap the es6-promise (OldPromise) in a TS promise for the compiler to be happy
    function performOperation(): Promise<boolean> {  
        return operation(startingJson, modifierToUse, options)
                      .then(res => {
                                    afterOperationApplied = res;
                                    return writeTargetFile();
                                   })
                      .catch(err => false); 
    }

    // target file write
    function writeTargetFile(): Promise<boolean> {
        return writeJsonLdFile(target, afterOperationApplied)
                 .then(_ => true)
                 .catch( () => false);
    }
}

