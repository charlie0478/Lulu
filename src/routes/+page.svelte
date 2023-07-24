<script>
	import { onMount } from 'svelte';

	let title = 'Lulu Ilanda';
	let titleArray = Array.from(title);

	const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

	const triggerHover = (element) => {
		element.style.color = "rgb(187, 68, 4)";
		setTimeout(() => {
			element.style.color = "";
		}, 500);
	}

	onMount(() => {
		titleArray.forEach((_, index) => {
			setTimeout(() => {
				const element = document.getElementById(`title${index}`);
				if (element) {
					triggerHover(element);
				}
			}, randomBetween(500, 3000));
		});
	}); 
</script>


<div class="mx-auto my-16">
	<div class="text-5xl md:text-7xl lg:text-8xl font-display text-center m-0 p-0">
		{#each titleArray as letter, index}
			<span class="hover-letter p-0 m-0 font-display text-white" id="title{index}"
				>{letter === ' ' ? ' ' : letter}</span
			>
		{/each}
	</div>
</div>
<div class="container">
<div class="mx-auto pt-0 p-0">
	<iframe class="mx-auto h-[33vh] sm:h-[50vh] md:h-[75vh] w-[95vw] md:w-[75vw]" src="https://www.youtube.com/embed/HMm1M1R9_tk" title="Make Music Day 2023 - TAFE NSW - Lulu Ilanda ft Victor Jesus - &#39;Whatever Keeps Us Together&#39;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>
<style>
	div {
		position: relative;
		margin-inline: auto;
	}

	


	

	span {
		padding: 0;
		margin: 0;
		transition: color 0.5s ease-out;
	}

	.hover-letter:hover {
		color: rgb(187, 68, 4);
	}


	
</style>
