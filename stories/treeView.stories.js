import { action } from '@storybook/addon-actions'
import { ModuleSelector, TreeView } from '../src/index.js'

// Get model store shared by this app's components
import { _input, _output } from './stores.js'

let exampleTreeData = [
  { id: '-1', text: 'TheRoot', children: [
    { "id": "0", "text": "node-0", "children": [
      { "id": "0-0", "text": "node-0-0", "children": [
        { "id": "0-0-0", "text": "node-0-0-0" },
        { "id": "0-0-1", "text": "node-0-0-1" },
        { "id": "0-0-2", "text": "node-0-0-2" }]
      },
      { "id": "0-1", "text": "node-0-1", "children": [
        { "id": "0-1-0", "text": "node-0-1-0" },
        { "id": "0-1-1", "text": "node-0-1-1" },
        { "id": "0-1-2", "text": "ajkhasdjkhaskjdhkjhaskdjhkjashdkjhasdjkhkjhasdkjaskjdhaksjdhkjhasdhaksjhdkjashdakjsdhkjashdkhaskhaksjhdkjadshkjhashkjashdnode-0-1-2" }]
      },
      { "id": "0-2", "text": "node-0-2", "children": [
        { "id": "0-2-0", "text": "node-0-2-0" },
        { "id": "0-2-1", "text": "node-0-2-1" },
        { "id": "0-2-2", "text": "node-0-2-2" }]
      }]
    },
    { "id": "1", "text": "node-1", "children": [
      { "id": "1-0", "text": "node-1-0", "children": [
        { "id": "1-0-0", "text": "node-1-0-0" },
        { "id": "1-0-1", "text": "node-1-0-1" },
        { "id": "1-0-2", "text": "node-1-0-2" }]
      },
      { "id": "1-1", "text": "node-1-1", "children": [
        { "id": "1-1-0", "text": "node-1-1-0" },
        { "id": "1-1-1", "text": "node-1-1-1" },
        { "id": "1-1-2", "text": "node-1-1-2" }]
      },
      { "id": "1-2", "text": "node-1-2", "children": [
        { "id": "1-2-0", "text": "node-1-2-0" },
        { "id": "1-2-1", "text": "node-1-2-1" },
        { "id": "1-2-2", "text": "node-1-2-2" }]
      }]
    },
    { "id": "2", "text": "node-2", "children": [
      { "id": "2-0", "text": "node-2-0", "children": [
        { "id": "2-0-0", "text": "node-2-0-0" },
        { "id": "2-0-1", "text": "node-2-0-1" },
        { "id": "2-0-2", "text": "node-2-0-2" }]
      },
      { "id": "2-1", "text": "node-2-1", "children": [
        { "id": "2-1-0", "text": "node-2-1-0" },
        { "id": "2-1-1", "text": "node-2-1-1" },
        { "id": "2-1-2", "text": "node-2-1-2" }]
      },
      { "id": "2-2", "text": "node-2-2", "children": [
        { "id": "2-2-0", "text": "node-2-2-0" },
        { "id": "2-2-1", "text": "node-2-2-1" },
        { "id": "2-2-2", "text": "node-2-2-2" }]
      }]
    }]
  }]

export default {
  title: 'Tree View',
  component: TreeView,
}

export const TreeViewExample = () => ({
  Component: TreeView,
  props: {treeData: exampleTreeData, containerSelector: 'myContainer'},
  on: { click: action('clicked') },
})

export const ModuleSelectorExample = () => ({
  Component: ModuleSelector,
  props: {_input: _input, _output: _output},
  on: { click: action('clicked') },
})
