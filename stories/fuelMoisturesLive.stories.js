import { action } from '@storybook/addon-actions'
import { FuelMoisturesLive } from '../src/index.js'

// Get model store shared by this app's components
import { _input, _output } from './stores.js'

export default {
  title: 'Fuel Moistures Live',
  component: FuelMoisturesLive,
}

export const Standalone = () => ({
  Component: FuelMoisturesLive,
  props: {_input: _input, _output: _output},
  on: { click: action('clicked') },
})
