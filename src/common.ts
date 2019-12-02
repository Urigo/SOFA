import { paramCase } from 'change-case';

export function convertName(name: string) {
  return paramCase(name);
}

export function isNil<T>(val: T) {
  return val == null;
}
