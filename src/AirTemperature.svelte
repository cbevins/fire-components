<script>
  export let _input
  let c = centigrade($_input.airTemperature)

  function centigrade(f) { return (5 * (f-32) / 9) }
  function handleAirTemp() {
    c = centigrade($_input.airTemperature)
  }
</script>

<div class="control-wrapper">
  <div class="row">
      <p class="air-temp-title">Air</p>
  </div>
  <div class="row">
    <div class="air-temp-slider">
      <p class="air-temp-label">Temp</p>
      <p class="air-temp-value">{c.toFixed(0)}C&#x00B0;</p>
      <p class="air-temp-value">{($_input.airTemperature).toFixed(0)} F&#x00B0;</p>
      <div class="vertical-slider-wrapper">
        <input bind:value={$_input.airTemperature} type="range" min="40" max="120" step="1"
        on:input={handleAirTemp}>
      </div>
    </div>
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
.air-temp-label {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: center;
  color: green;
  margin: 0px;
}
.air-temp-title {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: center;
  color: green;
  margin: 0px;
}
.air-temp-value {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: center;
  color: green;
  margin: 0px;
}
.air-temp-slider {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  width: 50px;
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
