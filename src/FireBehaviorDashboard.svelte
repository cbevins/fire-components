<script>
  import { Container, Row, Col, Table, Card, CardBody, CardHeader, CardTitle } from "sveltestrap"
  import * as Comp from './index.js'
  export let _input
  export let _output
  let ros
  $: ros = $_output.spreadRate
</script>

<Comp.OutputSpreadRate _output={_output} />
<Comp.OutputFireHeadingFromNorth _output={_output} />
<Comp.OutputFlameLength _output={_output} />
<Comp.OutputScorchHeight _output={_output} />
<Comp.FireWindSlopeCompass
  width=100 height=100
  _input={_input} _output={_output} scale=1/>

<div class="grid-container">
Grid container
</div>
<style>
.grid-container {
  display: grid;
  grid-template-columns: 120px 80px 80px 130;
  grid-template-rows: 20px;
  align-content: space-evenly;
  box-shadow: 0 1px 3px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.48);
}
</style>