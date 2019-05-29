---
category: packages
---

## eslint-plugin-racoon-ui

Racoon UI 에서 사용되는 eslint-plugin 을 위한 configuration 입니다.

### Installation

먼저 yarn 을 이용하여 --dev 모드로 eslint 를 설치한 뒤 eslint-plugin-racoon-ui 를 설치합니다.

```sh
yarn add eslint --dev
```

```sh
yarn add eslint-plugin-racoon-ui --dev
```

### Configuration

Racoon UI 에서 제공하는 eslint-plugin 프리셋을 이용하기 위해서는 eslint config 설정에 아래의 항목을 추가하면 됩니다.

ui-eslint-config 에는 이미 아래 내용이 포함되어 있기 때문에 별도로 설정할 필요가 없습니다.

```json
  "extends": [
    "eslint:recommended",
    "plugin:racoon-ui/recommended"
  ]
```

만약, ui-eslint-preset 을 사용하지 않을 경우에는 여러분의 eslint 설정의 plugin 설정에 개별적으로 아래의 부가설정을 넣어줘야 합니다.

```json
{
  "plugins": [
    "racoon-ui"
  ]
}
```