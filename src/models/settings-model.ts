// model that provides a sketch of package.json fields

interface Settings {
    version: string;
    license: string;
    repository: string;
}

function emptySettings(): Settings {
    const retval: Settings = {
        version: '',
        license: '',
        repository: ''
    };
    return retval;
}

export { Settings, emptySettings };