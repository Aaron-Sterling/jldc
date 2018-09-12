// utility function that validates three files
// confirms the first two files exist
// the third filename must be a legal filename (but does not need to exist)

import { FileNameTitle } from '../../../models/filename-and-title-model';
import { fileExists } from './file-exists';
import { validateTargetFile } from './validate-target-file';

export function validateSourceModifierTarget(sourceFile: FileNameTitle, modifierFile: FileNameTitle, targetFile: FileNameTitle): Promise<boolean> {
    if (fileExists(sourceFile) && fileExists(modifierFile)) {
        return validateTargetFile(targetFile);
    } else {
        return Promise.resolve(false);
    }                                          
}


