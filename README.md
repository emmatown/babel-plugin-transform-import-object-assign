# babel-plugin-transform-import-object-assign

> Transform Object.assign calls to imports from [object-assign](https://github.com/sindresorhus/object-assign)

This Babel plugin is really useful for libraries for React because React already depends on object-assign so you can avoid bundling two Object.assign polyfills.

This plugin should be used with `@babel/plugin-proposal-object-rest-spread` with the options shown below.

```json
{
  "plugins": [
    [
      "@babel/plugin-proposal-object-rest-spread",
      { "loose": true, "useBuiltIns": true }
    ],
    "babel-plugin-transform-import-object-assign
  ]
}
```
