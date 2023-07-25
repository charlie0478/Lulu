<script>
	import Button from './Button.svelte';
	export let image;
</script>

<style>
	.responsive-image {
		max-width: 100%;
		height: auto;
	}
</style>

<div class="flex flex-col md:mx-12 mx-6 border-y-1  md:flex-row ">
	<div class="flex flex-col self-start justify-end  ">
		<div class="self-start ">
			<h1 class="font-display text-3xl md:text-4xl text-white m-0 font-light">
				<slot name="title"/>
			</h1>
			<h1 class="font-display text-xl md:text-2xl text-white m-0 mt-12 font-light">
				<slot name="para"/>
			</h1>
		</div>
		
	</div>

	<div
		class="row-start-2 mt-12 md:col-start-7 md:justify-end md:ml-auto max-w-[66%] md:max-w-[33%]"
		id="image-column"
	>
		<div class="">
			<img src="{image}" loading='lazy' class="responsive-image" alt="Lulu"/>
		</div>
	</div>
</div>
