"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const tslib_1 = require("tslib");
const ansi_colors_1 = tslib_1.__importDefault(require("ansi-colors"));
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
exports.logger = {
    error: (...args) => {
        log('error', ansi_colors_1.default.red, args);
    },
    warn: (...args) => {
        log('warn', ansi_colors_1.default.yellow, args);
    },
    info: (...args) => {
        log('info', ansi_colors_1.default.green, args);
    },
    debug: (...args) => {
        log('debug', ansi_colors_1.default.blue, args);
    },
};
