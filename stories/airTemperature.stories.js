import { action } from '@storybook/addon-actions'
import { AirTemperature } from '../src/index.js'

// Get model store shared by this app's components
import { _input, _output } from './stores.js'

export default {
  title: 'Air Temperature',
  component: AirTemperature,
}

export const Standalone = () => ({
  Component: AirTemperature,
  props: {_input: _input, _output: _output},
  on: { click: action('clicked') },
})
