# Create a mobx project using create-react-app

### Step 01: Create a project using create-react-app, then run `yarn eject`

### Step 02: install mobx mobx-react
```js
npm i mobx mobx-react
```

### Step 03: Add @babel/plugin-proposal-decorators to support decorators

```js
npm i -D @babel/plugin-proposal-decorators
```

### Step 04: Add @babel/plugin-proposal-decorators to webpack
In 'test: /\.(js|mjs|jsx|ts|tsx)$' under 'oneOf' section, add below lines of code to 'plugins'
```
[
    require.resolve('@babel/plugin-proposal-decorators'),
    {
        "legacy": true
    }
],
```

Now it should looks like
```js
// Process application JS with Babel.
// The preset includes JSX, Flow, TypeScript, and some ESnext features.
{
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
    customize: require.resolve(
        'babel-preset-react-app/webpack-overrides'
    ),
    
    plugins: [
        [
            require.resolve('@babel/plugin-proposal-decorators'),
            {
                "legacy": true
            }
        ],
        [
            require.resolve('babel-plugin-named-asset-import'),
            {
                loaderMap: {
                    svg: {
                        ReactComponent: '@svgr/webpack?-svgo![path]',
                    },
                },
            },
        ],
    ],
    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds.
    cacheDirectory: true,
    cacheCompression: isEnvProduction,
    compact: isEnvProduction,
    },
},
```

### Step 05. If any errors when running create-react-app, delete npm_modules, and npm i again. If any dependencies are missing, install it

### Step 06. vscode will throw warning when you use @ decorator syntax. To fix it, add a tsconfig.json file under your project root
```js
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "allowJs": true
    }
}
```


