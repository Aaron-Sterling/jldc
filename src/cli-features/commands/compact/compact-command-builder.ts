// Compact Command

import { inject, injectable } from 'inversify';
import { Command } from 'commander';
import { CompactOptions } from 'jsonld';
import { CompactAction } from './compact-action';
import { COMPACT_HELP_MESSAGE } from './compact-help-message';
import { TYPES } from '../../../inversify/types'
import { CommandBuilder } from '../../../models/command-builder-model';
import { showHelpMessage } from '../utils/show-help-message';

@injectable()
class CompactCommandBuilder implements CommandBuilder {

    name = 'compact <sourceFile> <contextFile> [targetFile]';
    desc = 'Apply @context to JSON';
    helpMessage = COMPACT_HELP_MESSAGE;

    constructor(@inject(TYPES.CompactAction) private compactAction: CompactAction) {}

    buildCommand(cliTool: Command) {
        cliTool.command(this.name)
                .description(this.desc)
                .action(this.compactAction.compactAction)
                .option('-a --no-compact-arrays', 'disable compacting arrays to a single value')
                .on('--help', _ => showHelpMessage(this.helpMessage));
    }

    
}

export { CompactCommandBuilder };
