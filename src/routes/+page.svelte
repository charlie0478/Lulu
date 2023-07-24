<script>
	import { onMount, onDestroy } from 'svelte';


	let title = 'Lulu Ilanda';
	let video;
	let titleArray = Array.from(title);
	let time = 0;
	let duration;
	let paused = true;
	let showControls = true;
	let showControlsTimeout;

	let lastMouseDown;
	let colorArray = Array(title.length).fill('white');
	function handleMove(e) {
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => (showControls = false), 2500);
		showControls = true;

		if (!duration) return;
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return;

		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
		const { left, right } = this.getBoundingClientRect();
		time = (duration * (clientX - left)) / (right - left);
	}

	function handleMousedown(e) {
		lastMouseDown = new Date();
	}

	function handleMouseup(e) {
		if (new Date() - lastMouseDown < 300) {
			if (paused) e.target.play();
			else e.target.pause();
		}
	}

	function format(seconds) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}

	// New code to listen for the spacebar and arrow key events
	onMount(() => {
		document.addEventListener('keydown', function (event) {
			switch (event.code) {
				case 'Space':
					if (video.paused) video.play();
					else video.pause();
					break;
				case 'ArrowRight':
					video.currentTime += 20;
					break;
				case 'ArrowLeft':
					video.currentTime -= 20;
					break;
			}
		});
	});
	
</script>

<div class="mx-auto my-16">
	<div class="text-5xl md:text-7xl lg:text-8xl font-display text-center m-0 p-0">
		{#each titleArray as letter}
			<span class="hover-letter p-0 m-0 font-display text-white" id="title"
				>{letter === ' ' ? ' ' : letter}</span
			>
		{/each}
	</div>
</div>
<div class="container">
<div class="mx-auto pt-0 p-0">
	<iframe class="mx-auto h-[33vh] md:h-[75vh] w-[75vw]" src="https://www.youtube.com/embed/HMm1M1R9_tk" title="Make Music Day 2023 - TAFE NSW - Lulu Ilanda ft Victor Jesus - &#39;Whatever Keeps Us Together&#39;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

	
</div>
</div>
<style>
	div {
		position: relative;
		margin-inline: auto;
	}

	.controls {
		position: absolute;
		top: 0;
		padding-right: 1rem;
		transition: opacity 1s;
	}

	.info {
		display: flex;
		width: 100%;
		padding-right: 1rem;
	}

	.time:last-child {
		text-align: right;
	}

	span {
		padding: 0;
		margin: 0;
	}
	progress {
		display: block;
		width: 100%;
		height: 10px;
		-webkit-appearance: none;
		appearance: none;
	}

	progress::-webkit-progress-bar {
		background-color: rgba(0, 0, 0, 0.2);
	}

	progress::-webkit-progress-value {
		background-color: rgba(255, 255, 255, 0.6);
	}

	video {
		max-width: 100%;
	}

	#title {
		transition: color 0.3s ease-out;
	}
	#title:hover {

		color: rgb(187, 68, 4);
	}

	
</style>
