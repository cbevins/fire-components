<script>
  export let width
  export let height
  export let aspect
  export let fireHead
  export let windFrom
  export let lwr

  let points = [
    {deg: 270, text: 'N', x: 56, y: 10, cls: 'compass-text-major'},
    {deg: 315, text: 'NE', x: 94, y: 25, cls: 'compass-text-minor'},
    {deg: 0, text: 'E', x: 110, y: 63, cls: 'compass-text-major'},
    {deg: 45, text: 'SE', x: 94, y: 102, cls: 'compass-text-minor'},
    {deg: 90, text: 'S', x: 56, y: 117, cls: 'compass-text-major'},
    {deg: 135, text: 'SW', x: 12, y: 102, cls: 'compass-text-minor'},
    {deg: 180, text: 'W', x: 0, y: 63, cls: 'compass-text-major'},
    {deg: 225, text: 'NW', x: 12, y: 25, cls: 'compass-text-minor'},
  ]

  let rx
  $: rx = 40 / lwr
</script>

<style>
	.fire-wind-slope-compass-face {
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

	.slope-pointer {
		stroke: #f00;
		stroke-width: 0.5;
	}

	.wind-needle {
		stroke: blue;
    stroke-width: .5;
	}

	.fire-needle {
		stroke: rgb(180,0,0);
    stroke-width: .5;
	}

  .compass-text-minor {
    font: normal 8px sans-serif;
  }

  .compass-text-major {
    font: bold 10px sans-serif;
  }
</style>

<svg class="defs-only" xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="display: block;">
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
    <radialGradient id="slopeBubbleGradient" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="white" stop-opacity="0" />
      <stop offset="100%" stop-color="black" stop-opacity=".5" />
    </radialGradient>

    <symbol id="fireWindSlopeCompass" >
      <circle r='48' class="fire-wind-slope-compass-face"
        transform="translate(60,60)" />
      <!-- markers -->
      {#each points as {deg, text, x, y, cls}}
        <line	class='major-tic'	y1='35'	y2='45'	transform='translate(60,60) rotate({deg})'/>
        <text x={x} y={y} class='{cls}'>{text}</text>
        <line class='minor-tic'	y1='42' y2='45'	transform='translate(60,60) rotate({deg + 15})'/>
        <line class='minor-tic'	y1='42' y2='45'	transform='translate(60,60) rotate({deg + 30})'/>
      {/each}
      <!-- slope needle -->
      <!-- <g transform='translate(60,60) rotate({aspect})'>
        <polygon class='slope-needle'
          fill="url(#slopeGradient)"
          points="0,44 8,-44 0,-38 -8,-44" />
      </g> -->
      <!-- slope bubble -->
      <g transform='translate(60,60) rotate({aspect})'>
        <ellipse cx="0" cy="44" rx="4" ry="4" fill="url(#slopeBubbleGradient)" />
        <line class='slope-pointer'	y1='48' y2='54'/>
        <text x="0" y="44" style="font: normal 4px sans-serif;">up</text>
      </g>
      <!-- wind needle -->
      <g transform='translate(60,60) rotate({windFrom})'>
        <polygon class='wind-needle'
          fill="url(#windGradient)"
          points="0,44 6,38, 4,38, 4,30, -4,30, -4,38, -6,38" />
          <!-- points="0,42 6,-42 0,-36 -6,-42" /> -->
        <text x="0" y="30" style="font: normal 4px sans-serif;"
          >wind</text>
      </g>
      <!-- fire needle -->
      <!-- <g transform='translate(60,60) rotate({fireHead+180})'>
        <polygon class='fire-needle'
          fill="url(#fireGradient)"
          points="0,40 4,-40 0,-34 -4,-40" />
      </g> -->
      <!-- fire ellipse -->
      <g transform='translate(60,60) rotate({fireHead+180})'>
        <ellipse cx="0" cy="0" rx={rx} ry="40" fill="url(#fireGradient)" />
      </g>
    </symbol>
  </defs>
</svg>

<div>
  <svg viewBox="0 0 130 130" width={width} height={height}>
    <use xlink:href="#fireWindSlopeCompass"/>
  </svg>
</div>
