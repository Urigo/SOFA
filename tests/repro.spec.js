import { buildSchema } from 'graphql';
import { useSofa } from '../src';
function generateObjectType(name, fieldSet) {
    const fields = [];
    for (const fieldName in fieldSet) {
        const fieldType = fieldSet[fieldName];
        fields.push(generateField(fieldName, fieldType));
    }
    return `
    type ${name} {
      ${fields}
    }
  `;
}
function generateField(name, type) {
    return `${name}: ${type}`;
}
function generateMany(type, prefix, count) {
    const name = prefix + type;
    const fieldSet = {};
    while (count--) {
        fieldSet[`${name}_${count}`] = type;
    }
    return fieldSet;
}
export function generate({ mutations, queries, subscriptions, }) {
    const typeA = `
    type FooA {
      id: ID!
      name: String!
      createdAt: Float!
      foo: FooB
    }
  `;
    const typeB = `
    type FooB {
      id: ID!
      name: String!
      createdAt: Float!
      foo: FooC
    }
  `;
    const typeC = `
    type FooC {
      id: ID!
      name: String!
      createdAt: Float!
    }
  `;
    const type = `
    type Foo {
      id: ID!
      name: String!
      createdAt: Float!
      foo: FooA
    }
  `;
    const results = [type, typeA, typeB, typeC];
    if (queries) {
        results.push(generateObjectType('Query', generateMany('Foo', 'get', queries)));
    }
    if (mutations) {
        results.push(generateObjectType('Mutation', generateMany('Foo', 'create', mutations)));
    }
    if (subscriptions) {
        results.push(generateObjectType('Subscription', generateMany('Foo', 'listen', subscriptions)));
    }
    return results.join('\n');
}
test('memory issue', async () => {
    const schema = buildSchema(generate({
        queries: 1000,
        mutations: 1000,
        subscriptions: 1000,
    }));
    useSofa({ basePath: '/api', schema });
});
