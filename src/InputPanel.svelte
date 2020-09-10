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
<Comp.Bubble width=20 height=20 color='red'/>
<Comp.Bubble width=40 height=40 color='green' />
<Comp.Bubble width=60 height=60 color="blue" />
<Comp.Bubble width=80 height=80 color='gray'/>
<Comp.Bubble width=100 height=100 color='user'/>
<Comp.Bubble width=120 height=120 color='green'/>
<Comp.Bubble width=140 height=140 color='blue'/>
