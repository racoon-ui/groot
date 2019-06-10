/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Racoon-UI, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { createMuiTheme, colors } from '@racoon-ui/ui-core-material'

/**
 * Theme 를 적용하려면 아래의 항목을 변경하면 됩니다.
 * theme 에 대한 자세한 내용은 material theme 를 참고하세요.
 * https://material-ui.com/customization/themes/
 */

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  palette: {
    primary: {
      light: colors.blueGrey[300],
      main: colors.blueGrey[900],
      dark: colors.blueGrey[700]
    },
    secondary: {
      light: colors.blueGrey[300],
      main: colors.deepPurple[400],
      dark: colors.blueGrey[700]
    }
  },
  typography: {
    useNextVariants: true
  }
})

export default theme
