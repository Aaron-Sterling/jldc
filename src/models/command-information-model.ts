// Command Information model


interface CommandOptions {
    name: string,
    desc?: string
}

interface CommandInformation {
    name: string,
    desc?: string,
    action?: (...args: string[]) => void,
    helpMessage?: string,
    options?: Array<CommandOptions>
}

export { CommandInformation, CommandOptions };
