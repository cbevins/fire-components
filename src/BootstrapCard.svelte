<script>
  import { Container, Row, Col, Table, Card, CardBody, CardHeader, CardTitle } from "sveltestrap"
  import * as Comp from './index.js'
  export let _input
  export let _output
</script>

<Card>
  <CardHeader>
    <Comp.OutputSpreadRate _output={_output} />
    <Comp.OutputFireHeadingFromNorth _output={_output} />
    <Comp.OutputFlameLength _output={_output} />
    <Comp.OutputScorchHeight _output={_output} />
    <Comp.FireWindSlopeCompass _input={_input} _output={_output} scale=.5/>
  </CardHeader>
  <CardBody>
  <Table>
    <tr>
      <td><Comp.FuelMoisturesDead _input={_input} _output={_output} /></td>
      <td><Comp.FuelMoisturesLive _input={_input} _output={_output} /></td>
      <td><Comp.SlopeAspectSteepness _input={_input} _output={_output} /></td>
      <td><Comp.WindSpeedDirection _input={_input} _output={_output} /></td>
      <td><Comp.AirTemperature _input={_input} _output={_output} /></td>
    </tr>
  </Table>
  </CardBody>
</Card>
