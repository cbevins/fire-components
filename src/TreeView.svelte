<script>
  import { onMount } from 'svelte'
  import Tree from '@widgetjs/tree'
  export let treeData
  export let containerSelector

  let tree

  onMount(() => {
    tree = new Tree('.'+containerSelector, {
      data: treeData,
      closeDepth: 3, // start with all branches closed below this depth
      loaded: function () {
        this.values = ['0-0-0', '0-1-1'];
        console.log(this.selectedNodes)
        console.log(this.values)
        this.disables = ['0-0-0', '0-0-1', '0-0-2']
      },
      onChange: function () {
        console.log(this.values);
      }
    })
  })
</script>

<div class={containerSelector}>
</div>