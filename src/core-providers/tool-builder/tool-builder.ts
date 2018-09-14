// Main builder of the parsing function for the cli tool

import { Command } from 'Commander';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../inversify/types';
import { CLICommands } from '../../cli-features/commands/cli-commands-feature-provider';

import { getVersion } from '../settings-service/settings-info';
import { getUsage } from './usage';


// provider starts here
@injectable()
class ToolBuilder {

    cliTool: Command = new Command();
    
    constructor(@inject(TYPES.CLICommandsFeatureProvider) private commandBuilder: CLICommands) {}

    buildCLItool(): Command {
  
        // obtain version information
        this.cliTool.version(getVersion(), '-v, --version');

        // obtain usage information
        this.cliTool.usage(getUsage());

        // program information option
        this.cliTool.option('-i, --info', 'Show package information');
    
        // build the commands
        this.commandBuilder.buildAllCommands(this.cliTool);

        return this.cliTool;
    }
}

export { ToolBuilder }