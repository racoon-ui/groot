<p align="center">
  <a href="https://" rel="noopener" target="_blank">
    <img width="150" src="https://s3.ap-northeast-2.amazonaws.com/s3-stunitas/racoon-ui/logo.png" alt="racoon-ui logo">
  </a>
</p>

<h1 align="center">Racoon-UI</h1>

## Usage

racoon-ui 는 ST Unitas 내 Tutor Team 에서 react 를 이용하여 재활용 가능한 컴포넌트를 만드는 것을 목적으로 제작이 되었습니다.

racoon-ui 에서 제공하는 UI Components 들은 [material-ui 4.0](https://material-ui.com/getting-started/installation/) 을 기반으로 제작되었습니다.

racoon-ui react components 를 사용하기 위해서는 다음과 같은 순서로 진행하면 됩니다.

1. style theme 활성화
2. racoon-ui component import 와 render 함수에서 사용

예시:

```bash
$ yarn add @racoon-ui/core
```

```javascript
import React, { Component } from 'react'
import Heading from '@racoon-ui/core/Heading'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading>Now using racoon-ui components</Heading>
      </div>
    )
  }
}

export default App
```

## Browser Support

- Material UI 4.0 지원하는 브라우저를 함께 지원합니다.
- Internet Explorer 11 and Edge
- Chrome, Safari, Firefox (last two versions)

## License

[MIT](LICENSE)
