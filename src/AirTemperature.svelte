<script>
  import * as Comp from './index.js'
  export let _input
  export let decimals = 0
  function centigrade(f) { return (5 * (f-32) / 9) }
</script>

<div class="control-wrapper">
  <div class="row">
    <p class="air-temp-title">Temp</p>
  </div>
  <div class="row">
    <Comp.VerticalSlider label="Air" min="40" max="120" step="1"
      bind:value={$_input.airTemperature}
      line1={$_input.airTemperature.toFixed(decimals)+'F\u00B0'}
      line2={centigrade($_input.airTemperature).toFixed(decimals) + 'C\u00B0'} />
  </div>
</div>

<style>
* {
  box-sizing: border-box;
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
.control-wrapper {
  width: 50px;
  height: 220px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.48);
}
.air-temp-title {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: center;
  color: green;
  margin: 0px;
}
</style>
