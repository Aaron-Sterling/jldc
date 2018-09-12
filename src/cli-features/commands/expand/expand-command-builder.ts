// Expand Command Builder

import { inject, injectable } from 'inversify';
import { Command } from 'commander';
import { ExpandAction } from './expand-action';
import { EXPAND_HELP_MESSAGE } from './expand-help-message';
import { TYPES } from '../../../inversify/types'
import { CommandBuilder } from '../../../models/command-builder-model';
import { showHelpMessage } from '../utils/show-help-message';

@injectable()
class ExpandCommandBuilder implements CommandBuilder {

    name = 'expand <sourceFile> [targetFile]';
    desc = 'Expand JSON (or JSON-LD) file';
    helpMessage = EXPAND_HELP_MESSAGE;

    constructor(@inject(TYPES.ExpandAction) private expandAction: ExpandAction) {}

    buildCommand(cliTool: Command) {
        cliTool.command(this.name)
                .description(this.desc)
                .action(this.expandAction.expandAction)
                .on('--help', _ => showHelpMessage(this.helpMessage));
    }

    
}

export { ExpandCommandBuilder };
