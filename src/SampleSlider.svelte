<script>
  export let min = 0
  export let max = 100
  export let step = 1
  export let label = 'label'
  export let units = 'units'
  export let value = 0
</script>

<style>
.vertical-slider-wrapper {
  display: inline-block;
  width: 20px;
  height: 150px;
  padding: 0;
}
.vertical-slider-wrapper input {
  width: 150px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  transform: rotate(-90deg);
}
</style>

<!-- your code here -->
<p>{label}</p>
<div class="vertical-slider-wrapper">
<input bind:value={value}
  type="range" min={min} max={max} step={step}
  list="tickmarks">
</div>
<p>{value} {units}</p>
