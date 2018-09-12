// inversify config

import { Container } from 'inversify';
import 'reflect-metadata';
import { TYPES } from './types';

// core
import { ToolBuilder } from '../core-providers/tool-builder/tool-builder';

// features
import { CLICommands } from '../cli-features/commands/cli-commands-feature-provider';
//
import { CompactCommandBuilder } from '../cli-features/commands/compact/compact-command-builder';
import { CompactAction } from '../cli-features/commands/compact/compact-action';
//
import { FrameAction } from '../cli-features/commands/frame/frame-action';
import { FrameCommandBuilder } from '../cli-features/commands/frame/frame-command-builder';
//
import { ExpandAction } from '../cli-features/commands/expand/expand-action';
import { ExpandCommandBuilder } from '../cli-features/commands/expand/expand-command-builder';
//
import { FlattenAction } from '../cli-features/commands/flatten/flatten-action';
import { FlattenCommandBuilder } from '../cli-features/commands/flatten/flatten-command-builder';
//
import { NormalizeAction } from '../cli-features/commands/normalize/normalize-action';
import { NormalizeCommandBuilder } from '../cli-features/commands/normalize/normalize-command-builder';
//
import { SerializeAction } from '../cli-features/commands/serialize/serialize-action';
import { SerializeCommandBuilder } from '../cli-features/commands/serialize/serialize-command-builder';
//
import { DeserializeAction } from '../cli-features/commands/deserialize/deserialize-action';
import { DeserializeCommandBuilder } from '../cli-features/commands/deserialize/deserialize-command-builder';

/***
 * 
 * Build container
 * 
 */
let container = new Container();
// core
container.bind<ToolBuilder>(TYPES.ToolBuilder).to(ToolBuilder);
// features
container.bind<CLICommands>(TYPES.CLICommandsFeatureProvider).to(CLICommands);
//
container.bind<CompactCommandBuilder>(TYPES.CompactCommandBuilder).to(CompactCommandBuilder);
container.bind<CompactAction>(TYPES.CompactAction).to(CompactAction);
//
container.bind<FrameAction>(TYPES.FrameAction).to(FrameAction);
container.bind<FrameCommandBuilder>(TYPES.FrameCommandBuilder).to(FrameCommandBuilder);
//
container.bind<ExpandAction>(TYPES.ExpandAction).to(ExpandAction);
container.bind<ExpandCommandBuilder>(TYPES.ExpandCommandBuilder).to(ExpandCommandBuilder);
//
container.bind<FlattenAction>(TYPES.FlattenAction).to(FlattenAction);
container.bind<FlattenCommandBuilder>(TYPES.FlattenCommandBuilder).to(FlattenCommandBuilder);
//
container.bind<NormalizeAction>(TYPES.NormalizeAction).to(NormalizeAction);
container.bind<NormalizeCommandBuilder>(TYPES.NormalizeCommandBuilder).to(NormalizeCommandBuilder);
//
container.bind<SerializeAction>(TYPES.SerializeAction).to(SerializeAction);
container.bind<SerializeCommandBuilder>(TYPES.SerializeCommandBuilder).to(SerializeCommandBuilder);
//
container.bind<DeserializeAction>(TYPES.DeserializeAction).to(DeserializeAction);
container.bind<DeserializeCommandBuilder>(TYPES.DeserializeCommandBuilder).to(DeserializeCommandBuilder);

export default container;