<script>
  import { onMount } from 'svelte'
  export let width
  export let height
  export let color
</script>

<svg class="defs-only" xmlns="http://www.w3.org/2000/svg"
    width="0" height="0" style="display: block;">
  <defs>
    <radialGradient id="bubbleGradient" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="white" stop-opacity="0" />
      <stop offset="100%" stop-color={color} stop-opacity=".5" />
    </radialGradient>
  </defs>
  <symbol id="bubble" >
    <ellipse cx="100" cy="100" rx="100" ry="100" fill="url(#bubbleGradient)" />
  </symbol>
</svg>

<svg viewBox="0 0 200 200" {width} {height} color={color}>
  <use xlink:href="#bubble"/>
</svg>
