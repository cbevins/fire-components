<script>
  import { Container, Row, Col, Table, Card, CardBody, CardHeader, CardTitle } from "sveltestrap"
  import { Box, Results } from './index.js'
  import { FuelMoisturesDead, FuelMoisturesLive, SlopeAspectSteepness, FireWindSlopeCompass } from './index.js'
  export let _input
  export let _output
</script>

<Table>
<tr>
<td>
  <FuelMoisturesDead _input={_input} _output={_output} />
</td>
<td>
  <FuelMoisturesLive _input={_input} _output={_output} />
</td>
<td>
  <SlopeAspectSteepness _input={_input} _output={_output} />
</td>
<td>
  <FireWindSlopeCompass _input={_input} _output={_output} scale=1/>
</td>
<td>
  <Results _input={_input} _output={_output} />
</td>
</tr>
</Table>
