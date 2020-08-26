import * as colors from 'ansi-colors';

type Level = 'error' | 'warn' | 'info' | 'debug';

const currentLevel: Level = 'info';

const levels: Level[] = ['error', 'warn', 'info', 'debug'];

const log = (level: Level, color: any, args: any[]) => {
  if (levels.indexOf(level) <= levels.indexOf(currentLevel)) {
    console.log(`${color(level)}:`, ...args);
  }
};

export const logger = {
  error: (...args: any[]) => {
    log('error', colors.red, args);
  },
  warn: (...args: any[]) => {
    log('warn', colors.yellow, args);
  },
  info: (...args: any[]) => {
    log('info', colors.green, args);
  },
  debug: (...args: any[]) => {
    log('debug', colors.blue, args);
  },
};
