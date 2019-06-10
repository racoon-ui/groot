---
category: packages
---

## ui-core

RMWC(React Material Web Components) 기반의 racoon-ui core layout grid components 입니다.

### Installation

```sh
yarn add @racoon-ui/ui-core-layout-grid
```

### Usage

```js
import React from 'react'
import { Grid, GridCell, GridInner } from '@racoon-ui/ui-core-layout-grid'

export default (MyComponent = function() {
  return (
    <Grid>
      <GridCell span={4}>1</GridCell>
      <GridCell span={4}>2</GridCell>
      <GridCell span={4}>3</GridCell>
    </Grid>
  )
})
```

### License

[MIT](LICENSE)
