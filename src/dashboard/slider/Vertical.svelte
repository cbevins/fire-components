<script>
export let label = ''
export let value = 0
export let min = 0
export let max = 100
export let step = 1
export let line1 = ''
export let line2 = ''
</script>

  <div class="row">
    <div class="vslider-slider">
      <p class="vslider-label">{label}</p>
      <p class="vslider-value">{line1}</p>
      <p class="vslider-value">{line2}</p>
      <div class="vslider-wrapper">
        <!-- Bubble the on:input event bubbles up to its parent component -->
        <input on:input bind:value={value} type="range"
          min={min} max={max} step={step} />
      </div>
    </div>
  </div>

<style>
* { box-sizing: border-box;}
.row::after {
  content: "";
  clear: both;
  display: table;
}
.vslider-label {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: center;
  color: green;
  margin: 0px;
}
.vslider-value {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: center;
  color: green;
  margin: 0px;
}
.vslider-slider {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  width: 50px;
  height: 220px;
  padding-left: 5px;
  padding-right: 5px;
  margin: 0;
  float: left;
}
.vslider-wrapper {
  display: inline-block;
  width: 20px;
  height: 150px;
  padding: 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.48);
}
.vslider-wrapper input {
  width: 150px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  transform: rotate(-90deg);
}
</style>
