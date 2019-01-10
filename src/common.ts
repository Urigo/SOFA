import * as changeCase from 'change-case';

export function convertName(name: string) {
  return changeCase.param(name);
}
