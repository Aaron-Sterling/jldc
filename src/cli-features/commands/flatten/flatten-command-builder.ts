// Flatten Command Builder

import { inject, injectable } from 'inversify';
import { Command } from 'commander';
import { FlattenAction } from './flatten-action';
import { FLATTEN_HELP_MESSAGE } from './flatten-help-message';
import { TYPES } from '../../../inversify/types'
import { CommandBuilder } from '../../../models/command-builder-model';
import { showHelpMessage } from '../utils/show-help-message';

@injectable()
class FlattenCommandBuilder implements CommandBuilder {

    name = 'flatten <sourceFile> [targetFile]';
    desc = 'Flatten JSON (or JSON-LD) file';
    helpMessage = FLATTEN_HELP_MESSAGE;

    constructor(@inject(TYPES.FlattenAction) private flattenAction: FlattenAction) {}

    buildCommand(cliTool: Command) {
        cliTool.command(this.name)
                .description(this.desc)
                .action(this.flattenAction.flattenAction)
                .on('--help', _ => showHelpMessage(this.helpMessage));
    }

    
}

export { FlattenCommandBuilder };
