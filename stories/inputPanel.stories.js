import { action } from '@storybook/addon-actions'
import { InputPanel } from '../src/index.js'

// Get model store shared by this app's components
import { _input, _output } from './stores.js'

export default {
  title: 'Input Panel',
  component: InputPanel
}

export const CustomCss = () => ({
  Component: InputPanel,
  props: {_input: _input, _output: _output},
  on: { click: action('clicked') },
})
