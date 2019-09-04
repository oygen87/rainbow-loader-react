# rainbow-loader-react

> Animated rainbow loader for ReactJS

[![NPM](https://img.shields.io/npm/v/rainbow-loader-react.svg)](https://www.npmjs.com/package/rainbow-loader-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rainbow-loader-react
```

## Usage

```tsx
import * as React from 'react'

import { RainbowLoader } from "rainbow-loader-react";

class Example extends React.Component {
  render () {
    return (
      <RainbowLoader />
    )
  }
}
```

## Properties

|name|type               |
|----|-------------------|
|css |React.CSSProperties|

Default props are :

```
{
  animationDuration: "2s"
  height: "1px"
}
```

Example usage with props :

```tsx
<RainbowLoader css={{ height: "1rem" }} />
```

```tsx
<RainbowLoader css={{ width: "50%", animationDuration: "5s" }} />
```

## License

MIT © [oygen87](https://github.com/oygen87)
