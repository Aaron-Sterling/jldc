// CLI Commands feature provider

import { injectable, inject } from 'inversify';
import { Command } from 'commander';
import { CompactCommandBuilder } from './compact/compact-command-builder';
import { FrameCommandBuilder } from './frame/frame-command-builder';
import { ExpandCommandBuilder } from './expand/expand-command-builder';
import { FlattenCommandBuilder } from './flatten/flatten-command-builder';
import { NormalizeCommandBuilder } from './normalize/normalize-command-builder';
import { SerializeCommandBuilder } from './serialize/serialize-command-builder';
import { DeserializeCommandBuilder } from './deserialize/deserialize-command-builder';
import { TYPES } from '../../inversify/types';


@injectable()
class CLICommands {

    constructor(@inject(TYPES.CompactCommandBuilder) private compactCommandBuilder: CompactCommandBuilder,
                @inject(TYPES.FrameCommandBuilder) private frameCommandBuilder: FrameCommandBuilder,
                @inject(TYPES.ExpandCommandBuilder) private expandCommandBuilder: ExpandCommandBuilder,
                @inject(TYPES.FlattenCommandBuilder) private flattenCommandBuilder: FlattenCommandBuilder,
                @inject(TYPES.NormalizeCommandBuilder) private normalizeCommandBuilder: NormalizeCommandBuilder,
                @inject(TYPES.SerializeCommandBuilder) private serializeCommandBuilder: SerializeCommandBuilder,
                @inject(TYPES.DeserializeCommandBuilder) private deserializeCommandBuilder: DeserializeCommandBuilder) {}

    buildAllCommands(cliTool: Command) {
        this.compactCommandBuilder.buildCommand(cliTool);
        this.deserializeCommandBuilder.buildCommand(cliTool);
        this.expandCommandBuilder.buildCommand(cliTool);
        this.flattenCommandBuilder.buildCommand(cliTool);
        this.frameCommandBuilder.buildCommand(cliTool);
        this.normalizeCommandBuilder.buildCommand(cliTool);
        this.serializeCommandBuilder.buildCommand(cliTool);
    }
}

export { CLICommands };