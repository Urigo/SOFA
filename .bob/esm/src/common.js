import { paramCase } from 'param-case';
export function convertName(name) {
    return paramCase(name);
}
export function isNil(val) {
    return val == null;
}
