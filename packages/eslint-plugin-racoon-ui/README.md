---
category: packages
---

## eslint-plugin-racoon-ui

A UI component library made by Racoon UI

### Installation

Install eslint

```sh
yarn add eslint --dev
```

```sh
yarn add eslint-plugin-racoon-ui --dev
```

### Configuration

Use our preset to get reasonable defaults:

```json
  "extends": [
    "eslint:recommended",
    "plugin:racoon-ui/recommended"
  ]
```

If you do not use a preset you will need to specify individual rules and add extra configuration.

Add "racoon-ui" to the plugins section.

```json
{
  "plugins": [
    "racoon-ui"
  ]
}
```

Enable the rules that you would like to use.

```json
  "rules": {
    "inst/no-relative-package-imports": "error"
  }
```