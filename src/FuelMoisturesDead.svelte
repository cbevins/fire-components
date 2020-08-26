<script>
  import { Box } from './index.js'
  export let _input
  export let _output
</script>

<div class="control-wrapper">
  <div class="row">
      <p class="fuel-moisture-title">&nbsp;Dead Fuel Moisture</p>
  </div>
  <div class="row">
    <div class="fuel-moisture-slider">
      <p class="fuel-moisture-label">1-h</p>
      <p class="fuel-moisture-value">{$_input.fuelMoistureDead1}%</p>
      <div class="vertical-slider-wrapper">
        <input bind:value={$_input.fuelMoistureDead1} type="range" min="1" max="40" step="1">
      </div>
    </div>

    <div class="fuel-moisture-slider">
      <p class="fuel-moisture-label">10-h</p>
      <p class="fuel-moisture-value">{$_input.fuelMoistureDead10}%</p>
      <div class="vertical-slider-wrapper">
        <input bind:value={$_input.fuelMoistureDead10} type="range" min="1" max="40" step="1">
      </div>
    </div>

    <div class="fuel-moisture-slider">
      <p class="fuel-moisture-label">100-h</p>
      <p class="fuel-moisture-value">{$_input.fuelMoistureDead100}%</p>
      <div class="vertical-slider-wrapper">
        <input bind:value={$_input.fuelMoistureDead100} type="range" min="1" max="40" step="1">
      </div>
    </div>
  </div>
</div>
<Box>
  <p>Spread rate = {($_output.spreadRate).toFixed(2)} ft/min</p>
</Box>

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
  width: 120px;
  height: 200px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.48);
}
.fuel-moisture-label {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: center;
  color: green;
  margin: 0px;
}
.fuel-moisture-title {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: center;
  color: green;
  margin: 0px;
}
.fuel-moisture-value {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: center;
  color: green;
  margin: 0px;
}
.fuel-moisture-slider {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  width: 40px;
  height: 220px;
  padding-left: 5px;
  padding-right: 5px;
  margin: 0;
  float: left;
}
.vertical-slider-wrapper {
  display: inline-block;
  width: 20px;
  height: 150px;
  padding: 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.48);
}
.vertical-slider-wrapper input {
  width: 150px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  transform: rotate(-90deg);
}
</style>
