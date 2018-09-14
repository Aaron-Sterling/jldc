// reads contents of package.JSON

import { Settings } from '../../models/settings-model';
import { SETTINGS } from './settings'

export function getVersion(): string {
    const retval = SETTINGS.version.slice(0);
    return retval;
}

export function getSettings(): Settings {
    const retval: Settings = {
        version: SETTINGS.version.slice(0),
        license: SETTINGS.license.slice(0),
        repository: SETTINGS.repository.slice(0)
    }
    return retval;
}

