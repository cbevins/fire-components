<script>
  import { Container, Row, Col, Button, Collapse, Table } from "sveltestrap"
  import { Card, CardBody, CardHeader, CardTitle } from "sveltestrap"
  import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'sveltestrap'
  import * as Comp from './index.js'

  let isOpen = false
</script>

<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</svelte:head>

<Button color="primary" on:click={() => (isOpen = !isOpen)} class="mb-3">
  Toggle
</Button>
<Collapse {isOpen}>
  <Card body>
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
    anderson cred nesciunt sapiente ea proident.
  </Card>
</Collapse>
