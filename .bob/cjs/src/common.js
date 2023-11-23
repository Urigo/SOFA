"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNil = exports.convertName = void 0;
const param_case_1 = require("param-case");
function convertName(name) {
    return (0, param_case_1.paramCase)(name);
}
exports.convertName = convertName;
function isNil(val) {
    return val == null;
}
exports.isNil = isNil;
