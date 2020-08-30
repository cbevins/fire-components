import { action } from '@storybook/addon-actions'
import { Clock, PotOfGold, SampleButton, ScalingCompass } from '../src/index'

export default {
  title: 'Examples & Tutorials',
  component: SampleButton,
}

export const Text = () => ({
  Component: SampleButton,
  props: { name: 'World', buttonText: 'Hello Button' },
  on: { click: action('clicked') },
})

export const Emoji = () => ({
  Component: SampleButton,
  props: { name: '😀 😎', buttonText: '👍 💯' },
  on: { click: action('clicked') },
})

export const ClockDemo = () => ({
  Component: Clock,
  props: {},
  on: { click: action('clicked') },
})

export const ScalingPotOfGold = () => ({
  Component: PotOfGold,
  props: {},
  on: { click: action('clicked') },
})

export const ScalingCompassAttempt = () => ({
  Component: ScalingCompass,
  props: {},
  on: { click: action('clicked') },
})
