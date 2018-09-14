#! /usr/bin/env node
// NodeJS command line tool for JSON-LD functions

import container from '../inversify/inversify.config';
import { ToolBuilder } from '../core-providers/tool-builder/tool-builder';
import { TYPES } from '../inversify/types';
import { showProgramInfo } from './program-info';

// build the CLI tool
const toolBuilder: ToolBuilder = container.get<ToolBuilder>(TYPES.ToolBuilder);

const cliTool = toolBuilder.buildCLItool()

// process the input
cliTool.parse(process.argv);
if (cliTool.info) {
    showProgramInfo();
}

// show help if there are too few arguments
if (process.argv.length < 3) {
    cliTool.help();
}



