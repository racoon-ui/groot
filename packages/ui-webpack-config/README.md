---
category: packages
---

## ui-webpack-config

재사용 가능한 webpack 설정입니다. webpack 4.x 기준으로 작성되었습니다.

## Installation

```sh
yarn add @racoon-ui/ui-webpack-config
```

## Usage

In your Webpack config file:

```js
/* webpack.config.js */
const baseConfig = require('@racoon-ui/ui-webpack-config')
module.exports = {
  ...baseConfig,
  plugins: [ ...baseConfig.plugins, ...myPlugins ],
  module: {
    rules: [ ...myModuleRules, ...baseConfig.module.rules ]
  },
}
```

