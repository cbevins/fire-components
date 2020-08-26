<script>
  import { _input, _output } from './stores.js'
</script>

<div class="control-wrapper">
  <div class="row">
      <p class="fuel-moisture-title">Live Moisture</p>
  </div>
  <div class="row">
    <div class="fuel-moisture-slider">
      <p class="fuel-moisture-label">Herb</p>
      <p class="fuel-moisture-value">{$_input.fuelMoistureLiveHerb}%</p>
      <div class="vertical-slider-wrapper">
        <input bind:value={$_input.fuelMoistureLiveHerb} type="range" min="50" max="400" step="1">
      </div>
    </div>

    <div class="fuel-moisture-slider">
      <p class="fuel-moisture-label">Stem</p>
      <p class="fuel-moisture-value">{$_input.fuelMoistureLiveStem}%</p>
      <div class="vertical-slider-wrapper">
        <input bind:value={$_input.fuelMoistureLiveStem} type="range" min="50" max="400" step="1">
      </div>
    </div>
  </div>
</div>
<div>
  <p>Cured herb fraction = {(100 * $_output.curedHerbFraction).toFixed(0)}%</p>
  <p>Spread rate = {$_output.spreadRate.toFixed(2)} ft/min</p>
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
  width: 80px;
  height: 200px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.48);
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
