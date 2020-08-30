import { action } from '@storybook/addon-actions'
import { WindSpeedDirection } from '../src/index.js'

// Get model store shared by this app's components
import { _input, _output } from './stores.js'

export default {
  title: 'Wind Speed and Direction',
  component: WindSpeedDirection,
}

export const Standalone = () => ({
  Component: WindSpeedDirection,
  props: {_input: _input, _output: _output},
  on: { click: action('clicked') },
})
