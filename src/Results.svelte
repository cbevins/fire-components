<script>
import { Container, Row, Col, Table, Card, CardBody, CardHeader, CardTitle } from "sveltestrap"
  import { Box } from './index.js'
  export let _output
</script>

<div>
  <p>Cured herb fraction = {(100 * $_output.curedHerbFraction).toFixed(0)}%</p>
  <p>Spread rate = {$_output.spreadRate.toFixed(2)} ft/min</p>
</div>

