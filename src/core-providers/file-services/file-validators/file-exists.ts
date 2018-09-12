// returns true when a file exists
// calls displayError if it is going to return false

import { FileNameTitle, newFileNameTitle } from '.././../../models/filename-and-title-model';
import { existsSync } from 'fs';
import { displayError } from '../file-error-handler/file-error-handler';
import { FileErrorType } from '../file-error-handler/file-error-types';

export function fileExists(file: FileNameTitle = newFileNameTitle()): boolean {
    if (file.name && existsSync(file.name)) {
        return true;
    } else if (!file.name) {
        displayError(FileErrorType.NO_FILE_SPECIFIED, '');
        return false;
    } else {
        displayError(FileErrorType.FILE_DOES_NOT_EXIST, file.title || '');
        return false;
    }
}