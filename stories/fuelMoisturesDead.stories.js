import { action } from '@storybook/addon-actions'
import { FuelMoisturesDead } from '../src/index.js'

// Get model store shared by this app's components
import { _input, _output } from './stores.js'

export default {
  title: 'Fuel Moistures Dead',
  component: FuelMoisturesDead,
}

export const CustomCssSliders = () => ({
  Component: FuelMoisturesDead,
  props: {_input: _input, _output: _output},
  on: { click: action('clicked') },
})
