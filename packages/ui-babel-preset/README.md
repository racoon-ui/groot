---
category: packages
---

## ui-babel-preset

racoon-ui 에서 사용하는 babel-preset 설정입니다.

### Installation

```sh
yarn add @racoon-ui/ui-babel-preset
```

### Usage

.babelrc 파일에 다음과 같이 설정을 포함하실 수 있습니다.

```json
{
  "presets": ["@racoon-ui/ui-babel-preset"]
}
```

기본 설정 외 다른 옵션을 추가하고 싶다면 다음과 같이 설정할 수 있습니다.

```js
/* babelrc.js */
module.exports = {
  presets: [[ require('@racoon-ui/ui-babel-preset'), {
    coverage: Boolean(process.env.COVERAGE),
    esModules: Boolean(process.env.ES_MODULES)
  }]]
}
```
