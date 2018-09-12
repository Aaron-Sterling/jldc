// Frame Command

import { inject, injectable } from 'inversify';
import { Command } from 'commander';
import { FrameAction } from './frame-action';
import { FRAME_HELP_MESSAGE } from './frame-help-message';
import { TYPES } from '../../../inversify/types'
import { CommandBuilder } from '../../../models/command-builder-model';
import { showHelpMessage } from '../utils/show-help-message';

@injectable()
class FrameCommandBuilder implements CommandBuilder {

    name = 'frame <sourceFile> <frameFile> [targetFile]';
    desc = 'Apply a frame to JSON';
    helpMessage = FRAME_HELP_MESSAGE;

    constructor(@inject(TYPES.FrameAction) private frameAction: FrameAction) {}

    buildCommand(cliTool: Command) {
        cliTool.command(this.name)
                .description(this.desc)
                .action(this.frameAction.frameAction)
                .option('-a --no-compact-arrays', 'disable compacting arrays to a single value')
                .on('--help', _ => showHelpMessage(this.helpMessage));
    }

    
}

export { FrameCommandBuilder };
