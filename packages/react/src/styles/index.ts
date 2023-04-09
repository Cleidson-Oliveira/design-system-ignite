import { createStitches } from '@stitches/react'
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'

export const {
  css,
  getCssText,
  globalCss,
  styled,
  theme,
  config,
  createTheme,
  keyframes,
} = createStitches({
  themeMap: {
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
})
