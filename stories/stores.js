/**
 * The Storybook component stories all share this single BehavePlus model store
 */
import { derived, writable } from 'svelte/store'
import { SurfaceFire } from '../src/index.js'

export const model = new SurfaceFire()
export const _input = writable(model.input)
export const _output = derived(_input, $_input => model.run($_input))
