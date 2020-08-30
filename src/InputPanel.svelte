<script>
  import { Container, Row, Col, Table, Card, CardBody, CardHeader, CardTitle } from "sveltestrap"
  import * as Comp from './index.js'
  export let _input
  export let _output
</script>

<Comp.FireBehaviorDashboard _input={_input} _output={_output} />
<Table>
  <tr>
    <td><Comp.FuelMoisturesDead _input={_input} _output={_output} /></td>
    <td><Comp.FuelMoisturesLive _input={_input} _output={_output} /></td>
    <td><Comp.SlopeAspectSteepness _input={_input} _output={_output} /></td>
    <td><Comp.WindSpeedDirection _input={_input} _output={_output} /></td>
    <td><Comp.AirTemperature _input={_input} _output={_output} /></td>
  </tr>
</Table>
