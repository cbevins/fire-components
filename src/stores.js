import { derived, writable } from 'svelte/store'
import { BehavePlus } from './BehavePlus.js'

const bp = new BehavePlus()
export const _input = writable(bp.input)
export const _output = derived(_input, $_input => bp.run($_input))
