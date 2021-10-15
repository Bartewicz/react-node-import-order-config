# react-node-organize-imports

A simple andconvinient way for organizing imports in react and node projects.

## Presumptions

A goal is to group different types of imports into separate groups:

- if you use React, imports from React dedicated modules are enlisted in the top, otherwise/then
- modules imported from packages are separate group, then
- local modules:
  - imports from internal modules,
  - "index" of the current directory
  - "object"-imports (only available in TypeScript)
  - "type" imports (only available in Flow and TypeScript)

## Usage

The key is the `eslint-import-order` package that allows to specify desired order of prefedined gropus, but also add expectional rules manually. Rules are defined in `.eslintrc.json`, but can be also added to `package.json` under `"eslintConfig"` property.

In the following setup from current repository you can find some rules to be optional, but are needed to make it work with Node and React without CRA environment. Depending on your needs, you may safely remove those and still enjoy using the configuration:

- if using React without CRA:

```
"extends": [
  "react-app",
```

- if using Node specify environment to preserve global variables (like `process`, `console`):

```
"env": {
  "node": true
}
```

- when using module imports in Node you need to specify ECMAScript verion (>= 2015) and sourceType:

```
"parserOptions":
  "ecmaVersion": 2015,
  "sourceType": "module"
```

## Limitations

Direct CSS imports from stylesheets, like `import 'styles.css'`, do not import any value and so are considered side-effecting imports, it is not safe to be automatically ordered by linters - thus have to be ordered manually.

# Try it out!

You may try running `eslint` from the integrated terminal in StackBlitz, where this repository was created, to see how the rules group imports in certain files. Open the link below and try the following commands:

```
~/projects/node-wifkwb
// Run projects and see errors about imports in the files
> npm run dev
// Open backend/server.js and run the following, observe imports:
> eslint --fix backend/server.js
// Then open frontend/src/index.js and run in terminal:
> eslint --fix frontend/src/index.js
// Clean up manually unused import and run the project again:
> npm run dev
```

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/node-wifkwb)
