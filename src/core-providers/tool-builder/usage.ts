// usage information for CLI tool

const USAGE = '<command> [..filenames]' + '\n' + 
              '         app <command> --help';

export function getUsage(): string {
    return USAGE;
}