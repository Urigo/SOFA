import { paramCase } from 'param-case';

export function convertName(name: string) {
  return paramCase(name);
}

export function isNil<T>(val: T) {
  return val == null;
}

/**
 * Splits a path into an array of path parameters
 * path parameters are defined as a string starting with a colon (:)
 * @example /:id/books/:book -> ['id', 'book']
 * @param {string} path The URL path
 * @returns {string[]} An array of path parameters
 */
export function listPathParams(path: string): string[] {
  return path
    .split('/')
    .filter((part) => part.startsWith(':'))
    .map((pathVar) => pathVar.replace(':', ''));
}
