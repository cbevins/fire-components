import { action } from '@storybook/addon-actions'
import { FireWindSlopeCompass } from '../src/index.js'

// Get model store shared by this app's components
import { model, _input, _output } from './stores.js'

export default {
  title: 'Fire-Wind-Slope Compass',
  component: FireWindSlopeCompass,
}

export const Standalone = () => ({
  Component: FireWindSlopeCompass,
  props: {_input: _input, _output: _output,
    aspect: model.input.slopeDirectionAspect,
    windFrom: model.input.windDirectionSourceFromNorth,
    fireHead: model.output.fireHeadingFromNorth},
  on: { click: action('clicked') },
})
