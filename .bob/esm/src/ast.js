import { getOperationAST, } from 'graphql';
export function getOperationInfo(doc) {
    const op = getOperationAST(doc, null);
    if (!op) {
        return;
    }
    return {
        operation: op,
        name: op.name.value,
        variables: op.variableDefinitions || [],
    };
}
