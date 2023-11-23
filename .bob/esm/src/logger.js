import colors from 'ansi-colors';
const levels = ['error', 'warn', 'info', 'debug'];
const toLevel = (string) => levels.includes(string) ? string : null;
const currentLevel = globalThis.process?.env?.SOFA_DEBUG
    ? 'debug'
    : toLevel(globalThis.process?.env?.SOFA_LOGGER_LEVEL) ?? 'info';
const log = (level, color, args) => {
    if (levels.indexOf(level) <= levels.indexOf(currentLevel)) {
        console.log(`${color(level)}:`, ...args);
    }
};
export const logger = {
    error: (...args) => {
        log('error', colors.red, args);
    },
    warn: (...args) => {
        log('warn', colors.yellow, args);
    },
    info: (...args) => {
        log('info', colors.green, args);
    },
    debug: (...args) => {
        log('debug', colors.blue, args);
    },
};
