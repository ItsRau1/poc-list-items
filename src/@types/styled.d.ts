import { DefaultTheme } from '../styles/themes/DefaultTheme'
import 'style-components'

type ThemeType = typeof DefaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
  }