<script>
  import { Container, Row, Col, Table, Card, CardBody, CardHeader, CardTitle } from "sveltestrap"
  import * as Comp from './index.js'
  export let _input
  export let _output
</script>

<Table>
  <tr>
    <td rowspan="2">
      <Comp.FireWindSlopeCompass width=100 height=100
        _input={_input} _output={_output} scale=1/>
    </td>
    <th align='center'>Spread<br>Rate<br>ft/min</th>
    <th align='center'>Heading<br>Dir<br>&#x00B0;</th>
    <th align='center'>Flame<br>Length<br>ft</th>
    <th align='center'>Scorch<br>Height<br>ft</th>
  </tr>
  <tr>
    <td align='center' valign='top'>
      <span class='output-value'>
        <Comp.OutputSpreadRate _output={_output} />
      </span>
    </td>
    <td align='center' valign='top'>
      <span class='output-value'>
        <Comp.OutputFireHeadingFromNorth _output={_output} />
      </span>
    </td>
    <td align='center' valign='top'>
      <span class='output-value'>
        <Comp.OutputFlameLength _output={_output} />
      </span>
    </td>
    <td align='center' valign='top'>
      <span class='output-value'>
        <Comp.OutputScorchHeight _output={_output} />
      </span>
    </td>
  </tr>
</Table>

<style>
  .output-value {
    font: normal 20px sans-serif;
  }
</style>