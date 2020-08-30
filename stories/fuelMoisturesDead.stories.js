import { action } from '@storybook/addon-actions'
import { FuelMoisturesDead, InputFuelMoisturesDead } from '../src/index.js'

// Get model store shared by this app's components
import { model, _input, _output } from './stores.js'

export default {
  title: 'Fuel Moistures Dead',
  component: FuelMoisturesDead,
}

export const ValueProps = () => ({
  Component: InputFuelMoisturesDead,
  props: { _1h: 1, _10h: 2, _100h: 3 },
  on: { click: action('clicked') },
})

export const ModelValuesAsProps = () => ({
  Component: InputFuelMoisturesDead,
  props: {
    _1h: model.input.fuelMoistureDead1,
    _10h: model.input.fuelMoistureDead10,
    _100h: model.input.fuelMoistureDead100
  },
  on: { click: action('clicked') },
})

export const InputOutputStoresAsProps = () => ({
  Component: FuelMoisturesDead,
  props: {_input: _input, _output: _output},
  on: { click: action('clicked') },
})
