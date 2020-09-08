<script>
  import { FuelWalk } from './index.js'
  let ask = FuelWalk.ask
  let choices = FuelWalk.choices
  let crumbs = []
	let selected

  function handleChange() {
    crumbs.push(ask+': '+selected.if)
    if (selected.ask === null) {
      crumbs.push('Use fuel model: '+selected.fuel)
    } else {
      ask = selected.ask
      choices = selected.choices
    }
    crumbs = crumbs
  }

  function handleClear() {
    ask = FuelWalk.ask
    choices = FuelWalk.choices
    crumbs = []
  }

</script>

<h2>{ask}</h2>
	<select bind:value={selected} on:change={handleChange}>
		{#each choices as choice}
    <option value="" disabled selected>Select your option</option>
   	<option value={choice}>
				{choice.if}
			</option>
		{/each}
	</select>
  <ul>
    {#each crumbs as crumb}
      <li>{crumb}</li>
    {/each}
  </ul>

<button on:click={handleClear}>Clear</button>
