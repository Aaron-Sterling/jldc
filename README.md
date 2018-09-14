# JLDC
## JSON-LD comand line tool with advanced user interface and error trapping.

To install:

```npm install -g jldc```

**IMPORTANT: You need Python 2.x (2.7 recommended) in order to build this installation.** This cli tool has the official [jsonld.js](https://github.com/digitalbazaar/jsonld.js/) library as a dependency, which in turn has the [node-gyp](https://github.com/nodejs/node-gyp) library as a dependency. Building the node-gyp library requires Python 2.x; it *does not work* with Python 3.x. You do not need to know any Python to use this tool; the language is invisible after the build process.

JLDC uses the NodeJS promisify function, so it requires at least NodeJS 8.0.

An [official JSON-LD CLI Tool](https://github.com/digitalbazaar/jsonld-cli/) also exists (written by DigitalBazaar, not by me). JLDC has better error trapping, more comprehensive help messages, and a cleaner interface with JSON-LD version 2. However, JLDC contains much more code, so if you understand JSON-LD well and you want a lighter-weight tool, the official CLI is probably a better choice for you.

I needed this tool for a project, but I took writing this as an oportunity to learn [inversify.js](https://www.npmjs.com/package/inversify). This tool is written in pure Typescript, and, depending on your perspective, it either follows good OOP principles, or it uses unnecessarily fancy code for a simple job. Probably both perspectives are true!

## USAGE

### help and info

`jldc` or `jldc --help` provides general help

`jldc --info` provides package information

`jldc --version` provides version information

`jldc commandName --help` provides specific help for the command named `commandName`.

### compact

```compact [options] <sourceFile> <contextFile> [targetFile]```

Option: `-a, --no-compact-arrays`

Apply the context from `contextFile` to the JSON or JSON-LD in `sourceFile`, and write the result to `targetFile`.
If not specified, the name of the target file is `targetFile.json`. If the option `-a` is selected, the no-compact-arrays flag of the compact algorithm is set so that arrays will not be compacted to singletons.

For more information see [here](http://json-ld.org/spec/latest/json-ld/#compacted-document-form).

### deserialize

```deserialize [options] <sourceFile> [targetFile]```

Deserialize a document from (RDF) to JSON-LD. Currently, `-h` or `--help` is the only option supported.

### expand

```expand [options] <sourceFile> [targetFile]```

Expand the JSON or JSON-LD in `sourceFile`, and write the result to `targetFile`.
If not specified, the name of the target file is `targetFile.json`. Currently, `-h` or `--help` is the only option supported.

For more information see [here](http://json-ld.org/spec/latest/json-ld/#expanded-document-form)

### flatten

```flatten [options] <sourceFile> [targetFile]```

Flatten the JSON or JSON-LD in `sourceFile`, and write the result to `targetFile`.
If not specified, the name of the target file is `targetFile.json`.
For more information see [here](http://json-ld.org/spec/latest/json-ld/#flattened-document-form)

### frame

```frame [options] <sourceFile> <frameFile> [targetFile]```

Apply the frame from `frameFile` to the JSON or JSON-LD in `sourceFile`, and write the result to `targetFile`.
If not specified, the name of the target file is `targetFile.json`.
For more information see [here](http://json-ld.org/spec/latest/json-ld-framing/#introduction)

### normalize

```normalize [options] <sourceFile> [targetFile]```

Normalize a document using the RDF Dataset Normalization Algorithm (URDNA2015).
For more information see [here](http://json-ld.github.io/normalization/spec/)

### serialize

```serialize [options] <sourceFile> [targetFile]```

Serialize a document to N-Quads (RDF).
