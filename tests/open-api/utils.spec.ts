import { normalizePathParamForOpenAPI } from "../../src/open-api/utils"

describe('open-api/utils', () => {
    describe('normalizePathParamForOpenAPI', () => {
        test('should replace :param with {param}', () => {
            expect(normalizePathParamForOpenAPI('/users/:id')).toEqual('/users/{id}')
        })
        test('should replace multiple parameters', () => {
            expect(normalizePathParamForOpenAPI('/users/:id/:name')).toEqual('/users/{id}/{name}')
        })
    })
})