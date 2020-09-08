import { action } from '@storybook/addon-actions'
import { FuelModelSelector } from '../src/index.js'

export default {
  title: 'Fuel Model Selector',
  component: FuelModelSelector,
}

export const Simple = () => ({
  Component: FuelModelSelector,
  props: {},
  on: { click: action('clicked') },
})
