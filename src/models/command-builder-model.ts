// Command builder model

import { Command } from 'commander';

export interface CommandBuilder {
    name: string;
    desc: string;
    helpMessage: string;

    buildCommand: (cliTool: Command) => void;
}