<script>
  import { _input, _output } from './stores.js'
  export let scale = 1
  let vp = `${-65/scale} ${-65/scale} ${130/scale} ${130/scale}`

  let points = [
    {deg: 270, text: 'N', x: -4, y: -50, cls: 'compass-text-major'},
    {deg: 315, text: 'NE', x: 34, y: -35, cls: 'compass-text-minor'},
    {deg: 0, text: 'E', x: 50, y: 3, cls: 'compass-text-major'},
    {deg: 45, text: 'SE', x: 34, y: 42, cls: 'compass-text-minor'},
    {deg: 90, text: 'S', x: -4, y: 57, cls: 'compass-text-major'},
    {deg: 135, text: 'SW', x: -48, y: 42, cls: 'compass-text-minor'},
    {deg: 180, text: 'W', x: -60, y: 3, cls: 'compass-text-major'},
    {deg: 225, text: 'NW', x: -48, y: -35, cls: 'compass-text-minor'},
  ]
</script>

<style>
	svg {
		width: 80%;
		height: 80%;
	}

	.compas-face {
		stroke: #333;
    stroke-opacity: 50%;
		fill: white;
	}

	.minor-tic {
		stroke: #999;
		stroke-width: 0.5;
	}

	.major-tic {
		stroke: #333;
		stroke-width: 1;
	}

	.slope-needle {
		stroke: rgb(16, 139, 26);
    stroke-width: .5;
	}

	.wind-needle {
		stroke: blue;
    stroke-width: .5;
	}

	.fire-needle {
		stroke: rgb(180,0,0);
    stroke-width: .5;
	}
  .compass-text-minor { font: normal 8px sans-serif; }
  .compass-text-major { font: bold 10px sans-serif; }
</style>

<svg viewBox={vp}>
  <defs>
    <linearGradient id="fireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
    <linearGradient id="slopeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(186,238,190);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(15,139,26);stop-opacity:1" />
    </linearGradient>
    <linearGradient id="windGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(200,200,240);stop-opacity:1" />
      <stop offset="100%" style="stop-color:blue;stop-opacity:1" />
    </linearGradient>
  </defs>

	<circle class='compas-face' r='48'/>

	<!-- markers -->
	{#each points as {deg, text, x, y, cls}}
		<line	class='major-tic'	y1='35'	y2='45'	transform='rotate({deg})'/>
    <text x={x} y={y} class='{cls}'>{text}</text>
		<line class='minor-tic'	y1='42' y2='45'	transform='rotate({deg + 15})'/>
		<line class='minor-tic'	y1='42' y2='45'	transform='rotate({deg + 30})'/>
	{/each}

	<!-- slope needle -->
	<g transform='rotate({$_input.slopeDirectionAspect})'>
    <polygon class='slope-needle'
      fill="url(#slopeGradient)"
      points="0,44 8,-44 0,-38 -8,-44" />
  </g>
	<!-- wind needle -->
	<g transform='rotate({$_input.windDirectionSourceFromNorth})'>
    <polygon class='wind-needle'
      fill="url(#windGradient)"
      points="0,42 6,-42 0,-36 -6,-42" />
	</g>
	<!-- fire needle -->
	<g transform='rotate({$_output.fireHeadingFromNorth+180})'>
    <polygon class='fire-needle'
      fill="url(#fireGradient)"
      points="0,40 4,-40 0,-34 -4,-40" />
	</g>
</svg>
