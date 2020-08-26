import { action } from '@storybook/addon-actions'
import { Compass } from '../src/index'
import { DeadFuelMoistures } from '../src/index'
import { LiveFuelMoistures } from '../src/index'
import { Slope } from '../src/index'

export default {
  title: 'Fuel Moisture Sliders',
  component: DeadFuelMoistures,
}

export const CompassStory = () => ({
  Component: Compass,
  props: {},
  on: { click: action('clicked') },
})

export const DeadMoistureSlider = () => ({
  Component: DeadFuelMoistures,
  props: {},
  on: { click: action('clicked') },
})

export const LiveMoistureSlider = () => ({
  Component: LiveFuelMoistures,
  props: {},
  on: { click: action('clicked') },
})

export const SlopeSlider = () => ({
  Component: Slope,
  props: {},
  on: { click: action('clicked') },
})
