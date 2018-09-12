// Deserialize Command Builder

import { inject, injectable } from 'inversify';
import { Command } from 'commander';
import { DeserializeAction } from './deserialize-action';
import { DESERIALIZE_HELP_MESSAGE } from './deserialize-help-message';
import { TYPES } from '../../../inversify/types'
import { CommandBuilder } from '../../../models/command-builder-model';
import { showHelpMessage } from '../utils/show-help-message';

@injectable()
class DeserializeCommandBuilder implements CommandBuilder {

    name = 'deserialize <sourceFile> [targetFile]';
    desc = 'Deserialize RDF to JSON-LD';
    helpMessage = DESERIALIZE_HELP_MESSAGE;

    constructor(@inject(TYPES.DeserializeAction) private deserializeAction: DeserializeAction) {}

    buildCommand(cliTool: Command) {
        cliTool.command(this.name)
                .description(this.desc)
                .action(this.deserializeAction.deserializeAction)
                .on('--help', _ => showHelpMessage(this.helpMessage));
    }

    
}

export { DeserializeCommandBuilder };
