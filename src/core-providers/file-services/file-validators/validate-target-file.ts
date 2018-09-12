// validates target file
// the target file must either exist, or be created without error
// resolves true exactly when the target file is validated
// calls displayError if it is going to return false

import { FileNameTitle, newFileNameTitle } from '../../../models/filename-and-title-model';
import { displayError } from '../file-error-handler/file-error-handler';
import { FileErrorType } from '../file-error-handler/file-error-types';
import { existsSync, open } from 'fs';
import { promisify } from 'util';
import { confirmOverwrite } from './confirm-overwrite';

const openFile = promisify(open);

export function validateTargetFile(file: FileNameTitle = newFileNameTitle(),
                                   defaultTargetFile: FileNameTitle = newFileNameTitle()): Promise<boolean> {
                                
    let fileNameToTest: string;
    // attempt to find principal, then default filename
    // if neither one exists, display an error and terminate
    if (file.name) {
        fileNameToTest = file.name;
    }
    if (!fileNameToTest && (defaultTargetFile && defaultTargetFile.name)) {
        fileNameToTest = defaultTargetFile.name;
    } else if (!fileNameToTest && (!defaultTargetFile || !defaultTargetFile.name)) {
        displayError(FileErrorType.NO_FILE_SPECIFIED, file.title || defaultTargetFile.title || '');
        return Promise.resolve(false);
    }
    // name has been found
    // now check whether file can be opened
    // first get user confirmation to overwrite existing target file, if there is one
    if (existsSync(fileNameToTest)) {
        return confirmOverwrite(fileNameToTest); // file exists, get user confirmation via keyboard input
    } else {
        return openFile(fileNameToTest, 'w')  // file does not exist, return true if opened successfully
               .then(res => true)
               .catch(err => {
                              displayError(FileErrorType.CANNOT_CREATE_FILE, fileNameToTest);  // report error otherwise
                              return false;
                             }
                     );
    }
    
}