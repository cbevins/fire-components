<script>
  import { onMount } from 'svelte'
  import Tree from '@widgetjs/tree'
  // export let _input
  // export let _output

  let active = []
  let containerSelector = 'moduleSelector'

  let moduleData = [
    { id: 'surfaceFire', text: 'Surface Fire', children: [
      { id: 'surfaceSpot', text: 'Surface Spotting'},
      { id: 'crownFire', text: 'Crown Fire', children: [
        { id: 'crownSpot', text: 'Crown Spotting'},
      ]},
      { id: 'fireEllipse', text: 'Fire Ellipse', children: [
        { id: 'fireContain', text: 'Fire Containment', children: [] },
        { id: 'scorchHeight', text: 'Scorch Height', children: [
          { id: 'treeMortality', text: 'Tree Mortality', children: [] }
        ]},
      ]},
    ]},
    { id: 'spotting', text: 'Spotting from Burning Pile and Torching Trees'},
    { id: 'ignitionProbability', text: 'Ignition Probability'}
  ]

  let tree
  onMount(() => {
    tree = new Tree('.'+containerSelector, {
      data: moduleData,
      closeDepth: 4,
      loaded: function () {},
      onChange: function () {
        alert(this.values)
      }
    })
  })
</script>

<div class={containerSelector}></div>
