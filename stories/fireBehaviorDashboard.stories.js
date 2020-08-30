import { action } from '@storybook/addon-actions'
import { FireBehaviorDashboard } from '../src/index.js'

// Get model store shared by this app's components
import { _input, _output } from './stores.js'

export default {
  title: 'Fire Behavior Dashboard',
  component: FireBehaviorDashboard,
}

export const Standalone = () => ({
  Component: FireBehaviorDashboard,
  props: {_input: _input, _output: _output},
  on: { click: action('clicked') },
})
