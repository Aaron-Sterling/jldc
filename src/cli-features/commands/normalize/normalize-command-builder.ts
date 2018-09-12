// Normalize Command Builder

import { inject, injectable } from 'inversify';
import { Command } from 'commander';
import { NormalizeAction } from './normalize-action';
import { NORMALIZE_HELP_MESSAGE } from './normalize-help-message';
import { TYPES } from '../../../inversify/types'
import { CommandBuilder } from '../../../models/command-builder-model';
import { showHelpMessage } from '../utils/show-help-message';

@injectable()
class NormalizeCommandBuilder implements CommandBuilder {

    name = 'normalize <sourceFile> [targetFile]';
    desc = 'Normalize RDF dataset';
    helpMessage = NORMALIZE_HELP_MESSAGE;

    constructor(@inject(TYPES.NormalizeAction) private normalizeAction: NormalizeAction) {}

    buildCommand(cliTool: Command) {
        cliTool.command(this.name)
                .description(this.desc)
                .action(this.normalizeAction.normalizeAction)
                .on('--help', _ => showHelpMessage(this.helpMessage));
    }

    
}

export { NormalizeCommandBuilder };
