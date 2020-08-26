import { action } from '@storybook/addon-actions'
import { FireWindSlopeCompass } from '../src/index.js'

// Get model store shared by this app's components
import { _input, _output } from './stores.js'

export default {
  title: 'Fire-Wind-Slope Compass',
  component: FireWindSlopeCompass,
}

export const CustomCss = () => ({
  Component: FireWindSlopeCompass,
  props: {_input: _input, _output: _output},
  on: { click: action('clicked') },
})
