<script>
  export let _input

  let direction = compassDirection($_input.windDirectionSourceFromNorth)

  function toDegrees (rad) {
    return (rad * 180) / Math.PI
  }
  function toRadians (deg) {
    return (deg * Math.PI) / 180
  }
  function slopeDegrees (ratio) {
    const rad = Math.atan(ratio)
    return toDegrees(rad)
  }
  function slopeRatio (deg) {
    const rad = toRadians(deg)
    return Math.tan(rad)
  }
  function compassDirection(azimuth) {
    const Dir = ['NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
      'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    const span = 360 / (Dir.length + 1)
    const half = span / 2
    if (azimuth < half || azimuth >= 360-half) return 'N'
    const idx = Math.trunc((azimuth - half) / span)
    return Dir[idx]
  }
  function handleCompass() {
    direction = compassDirection($_input.windDirectionSourceFromNorth)
  }
</script>

<div class="control-wrapper">
  <div class="row">
      <p class="wind-title">Wind</p>
  </div>
  <div class="row">
    <div class="wind-slider">
      <p class="wind-label">Speed</p>
      <p class="wind-value">mph</p>
      <p class="wind-value">{($_input.windSpeedAtMidflame).toFixed(0)}</p>
      <div class="vertical-slider-wrapper">
        <input bind:value={$_input.windSpeedAtMidflame} type="range" min="0" max="40" step="1" />
      </div>
    </div>

    <div class="wind-slider">
      <p class="wind-label">From</p>
      <p class="wind-value">{direction}</p>
      <p class="wind-value">{$_input.windDirectionSourceFromNorth}&#x00B0;</p>
      <div class="vertical-slider-wrapper">
        <input bind:value={$_input.windDirectionSourceFromNorth} type="range" min="0" max="359" step="1"
        on:input={handleCompass}>
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
  width: 80px;
  height: 220px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.48);
}
.wind-label {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: center;
  color: green;
  margin: 0px;
}
.wind-title {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: center;
  color: green;
  margin: 0px;
}
.wind-value {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: center;
  color: green;
  margin: 0px;
}
.wind-slider {
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
