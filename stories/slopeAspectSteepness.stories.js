import { action } from '@storybook/addon-actions'
import { SlopeAspectSteepness } from '../src/index.js'

// Get model store shared by this app's components
import { _input, _output } from './stores.js'

export default {
  title: 'Slope Aspect and Steepness',
  component: SlopeAspectSteepness,
}

export const CustomCssSliders = () => ({
  Component: SlopeAspectSteepness,
  props: {_input: _input, _output: _output},
  on: { click: action('clicked') },
})
