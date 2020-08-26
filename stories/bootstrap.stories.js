import { action } from '@storybook/addon-actions'
import { BootstrapCard } from '../src/index'

export default {
  title: 'Bootstrap',
  component: BootstrapCard,
}

export const BootStrapCardExample = () => ({
  Component: BootstrapCard,
  props: {},
  on: { click: action('clicked') },
})
