# Change log

### vNEXT

### v0.12.0
- Allow to override mapping of custom scalar to OpenAPI (#1159) - Thanks @izumin5210
- Stop using AST Node to retrieve Enum values in OpenAPI (#1158) - Thanks @izumin5210
- Feature/openapi tags description (#1114) - Thanks @NorbertRuff
- Fix payload parsing for subscriptions (#1148) - Thanks @csuriano23

## BREAKING CHANGES
- `createSofaRouter` is no longer exported, use `useSofa` directly
- `useSofa` now supports more server frameworks. It uses `itty-router` and `@whatwg-node/server` so it supports almost all JS environments;
[See more](https://github.com/ardatan/whatwg-node/tree/master/packages/server#integrations)
Documentation on SOFA's docs will be updated soon.
- `OpenAPI` no longer has `.save` method. Use `.get` to get the schema;
```diff
const openApi = OpenAPI({
  schema,
  servers: [
    {
      url: '/', // Specify Server's URL.
      description: 'Development server',
    },
  ],
  info: {
    title: 'Example API',
    version: '3.0.0',
  },
});

- openApi.save('swagger.json');
+ fs.writeFileSync('swagger.json', JSON.stringify(openApi.get(), null, 2));
```

### v0.10.2
In this release express is removed as dependency. New `basePath` option is required to resolve sofa routes properly
```js
app.use(
  '/api',
  useSofa({
    basePath: '/api',
    schema,
  })
);
```

Added new server framework agnostic api
```js
const invokeSofa = createSofaRouter({
  basePath: '/api',
  schema,
});
...
const response = await invokeSofa({
  method: req.method,
  url: req.url,
  body: JSON.parse(await getStream(req)),
  contextValue: {
    req
  },
});
```

### v0.8.2
- Replace winston with custom logger ([#534](https://github.com/Urigo/SOFA/pull/534)) - Thanks @TrySound !

### v0.8.1
- Bump @graphql-tools/utils to fix [ardatan/graphql-tools#1928](https://github.com/ardatan/graphql-tools/pull/1928)

### v0.8.0
- Update dependencies

### v0.7.0

- feat(swagger): custom components and security for OpenAPI [PR #296](https://github.com/Urigo/SOFA/pull/296)

### v0.6.1

- fix(swagger): broken type of ID scalar in generated swagger document [PR #280](https://github.com/Urigo/SOFA/pull/280)
- fix: do not resolve nil variables [PR #193](https://github.com/Urigo/SOFA/pull/193)
- fix: use Kind from graphql instead of strings [PR #192](https://github.com/Urigo/SOFA/pull/192)
- fix: replace request package with Axios [PR #194](https://github.com/Urigo/SOFA/pull/194)

### v0.6.0

- fix(swagger): fix descriptions [PR #178](https://github.com/Urigo/SOFA/pull/178)
- feat: support GraphQL Interfaces [PR #167](https://github.com/Urigo/SOFA/pull/167)

### v0.5.1

- fix: do not skip falsy values (only null and undefined) [PR #134](https://github.com/Urigo/SOFA/pull/134)

### v0.5.0

- feat(swagger): add description [PR #107](https://github.com/Urigo/SOFA/pull/107)
- feat(swagger): add `ID` scalar definition [PR #107](https://github.com/Urigo/SOFA/pull/107)
- fix(swagger): use `requestBody` or `parameters` not both [PR #107](https://github.com/Urigo/SOFA/pull/107)
- fix(swagger): generate valid YAML structure for nested objects [PR #107](https://github.com/Urigo/SOFA/pull/107)
- fix(swagger): avoid empty `required` array [PR #107](https://github.com/Urigo/SOFA/pull/107)

### v0.4.0

- feat: add error handler [PR #44](https://github.com/Urigo/SOFA/pull/44) [PR #45](https://github.com/Urigo/SOFA/pull/45)
- feat: allow to customize endpoint's HTTP Method [PR #46](https://github.com/Urigo/SOFA/pull/46)
- feat: add InputTypeObjects to OpenAPI generation [PR #34](https://github.com/Urigo/SOFA/pull/34) - [@hajnalben](https://github.com/hajnalben)

### v0.3.0

- fix: parse InputTypeObject with JSON.parse [PR #30](https://github.com/Urigo/SOFA/pull/30)
- feat: custom `depthLimit` (circular references) [PR #29](https://github.com/Urigo/SOFA/pull/29)

### v0.2.3

- fix: prevent circular references [PR #23](https://github.com/Urigo/SOFA/pull/23)

### v0.2.2

We didn't track changes before this version.
