<script>

	let title = 'Lulu Ilanda';
	let titleArray = Array.from(title);
	

	
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
	}
	
	#title {
		transition: color 0.3s ease-out;
	}
	#title:hover {

		color: rgb(187, 68, 4);
	}

	
</style>
