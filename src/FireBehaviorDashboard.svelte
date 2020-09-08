<script>
  import { Container, Row, Col, Table, Card, CardBody, CardHeader, CardTitle } from "sveltestrap"
  import * as Comp from './index.js'
  export let _input
  export let _output
</script>

<div class="row">
  <Comp.OutputBox title1='Spread' title2='Rate' units='ft/min'
    value={$_output.spreadRate.toFixed(2)} />
  <Comp.OutputBox title1='Heading' title2='Azimuth' units='&#x00B0 from N';
    value={$_output.fireHeadingFromNorth.toFixed(0)} />
  <Comp.OutputBox title1='Flame' title2='Length' units='ft'
    value={$_output.flameLength.toFixed(2)} />
  <Comp.OutputBox title1='Scorch' title2='Height' units='ft'
    value={$_output.scorchHeight.toFixed(2)} />
  <Comp.FireWindSlopeCompass width=100 height=100
    aspect={$_input.slopeDirectionAspect}
    windFrom={$_input.windDirectionSourceFromNorth}
    fireHead={$_output.fireHeadingFromNorth} />
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
</style>