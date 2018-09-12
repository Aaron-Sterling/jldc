// comprehensive collection of types for inversify binding


export const enum TYPES {
    // feature providers
    CLICommandsFeatureProvider = 'CLI Commands Feature Provider',

    // feature: context
    CompactAction = 'Compact Action',
    CompactCommandBuilder = 'Compact Command Builder',

    // feature: frame
    FrameAction = 'Frame Action',
    FrameCommandBuilder = 'Frame Command Builder',

    // feature: expand
    ExpandAction = 'Expand Action',
    ExpandCommandBuilder = 'Expand Command Builder',

    // feature: flatten
    FlattenAction = 'Flatten Action',
    FlattenCommandBuilder = 'Flatten Command Builder',

    // feature: normalize
    NormalizeAction = 'Normalize Action',
    NormalizeCommandBuilder = 'Normalize Command Builder',

    // feature: serialize
    SerializeAction = 'Serialize Action',
    SerializeCommandBuilder = 'Serialize Command Builder',
    
    // feature: deserialize
    DeserializeAction = 'Deserialize Action',
    DeserializeCommandBuilder = 'Deserialize Command Builder',

    // core providers
    FileProvider = 'File Provider',
    ToolBuilder = 'Tool Builder',
    CommandBuilder = 'Command Builder'
}
