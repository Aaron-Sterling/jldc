// validate source file and target file
// source file must exist
// target file either must not exist, or it exists and the user confirms ok to overwrite it

import { FileNameTitle } from '../../../models/filename-and-title-model';
import { fileExists } from './file-exists';
import { validateTargetFile } from './validate-target-file';

export function validateSourceTarget(sourceFile: FileNameTitle, targetFile: FileNameTitle): Promise<boolean> {
    if (fileExists(sourceFile)) {
        return validateTargetFile(targetFile);
    } else {
        return Promise.resolve(false);
    }                                          
}
