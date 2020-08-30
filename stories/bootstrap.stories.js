import { action } from '@storybook/addon-actions'
import { BootstrapCard } from '../src/index'

// Get model store shared by this app's components
import { _input, _output } from './stores.js'

export default {
  title: 'Bootstrap',
  component: BootstrapCard,
}

export const Standalone = () => ({
  Component: BootstrapCard,
  props: {_input: _input, _output: _output},
  on: { click: action('clicked') },
})
