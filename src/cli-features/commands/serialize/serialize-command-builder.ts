// Serialize Command Builder

import { inject, injectable } from 'inversify';
import { Command } from 'commander';
import { SerializeAction } from './serialize-action';
import { SERIALIZE_HELP_MESSAGE } from './serialize-help-message';
import { TYPES } from '../../../inversify/types'
import { CommandBuilder } from '../../../models/command-builder-model';
import { showHelpMessage } from '../utils/show-help-message';


@injectable()
class SerializeCommandBuilder implements CommandBuilder {

    name = 'serialize <sourceFile> [targetFile]';
    desc = 'Serialize dataset to RDF';
    helpMessage = SERIALIZE_HELP_MESSAGE;

    constructor(@inject(TYPES.SerializeAction) private serializeAction: SerializeAction) {}

    buildCommand(cliTool: Command) {
        cliTool.command(this.name)
                .description(this.desc)
                .action(this.serializeAction.serializeAction)
                .on('--help', _ => showHelpMessage(this.helpMessage));
    }

    
}

export { SerializeCommandBuilder };
