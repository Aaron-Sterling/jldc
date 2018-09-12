import { readFileSync } from 'fs';

// Get version information from package.json and put it in the CLI info

const PACKAGE_JSON_PATH = 'package.json';

export function getVersion(): string {
    const packageJSON = JSON.parse(readFileSync(PACKAGE_JSON_PATH, 'utf8'));
    return (packageJSON.version as string) || 'Version information unavailable.';
}