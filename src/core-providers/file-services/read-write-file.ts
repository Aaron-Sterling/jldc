import { readFile, writeFile } from "fs";
import { promisify } from 'util';
import { displayError } from "./file-error-handler/file-error-handler";
import { FileErrorType } from "./file-error-handler/file-error-types";
import { JsonLdObject, JsonLd } from 'jsonld';

// read from or write to a file

const readFilePromise = promisify(readFile);
const writeFilePromise = promisify(writeFile);

export function readJsonLdFile(fileName: string): Promise<JsonLdObject> {
    return readFilePromise(fileName)
                   .then(buf => <JsonLdObject> JSON.parse(buf.toString()))
                   .catch(err => {
                                  displayError(FileErrorType.CANNOT_READ_FROM_FILE, fileName);
                                  return null;
                   });
}

// write to a file
// resolves to true if the write went well
// resolves to false otherwise
// calls displayError if resolving to false

export function writeJsonLdFile<T>(fileName: string, data: T): Promise<boolean> {
    return writeFilePromise(fileName, JSON.stringify(data))
                   .then(_ => true)
                   .catch(err => {
                                  displayError(FileErrorType.CANNOT_WRITE_TO_FILE, fileName);
                                  return false;
                   })
}