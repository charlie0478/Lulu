<script>
	import Button from './Button.svelte';
	export let image;
</script>

<div class="grid grid-cols-12 md:mx-12 mx-6 pb-12 border-y-1">
	<div class="flex flex-col self-start justify-end col-span-12 md:col-span-6">
		<div class="self-start py-12">
			<h1 class="font-display text-3xl md:text-4xl text-white m-0 font-light">
				<slot name="title"/>
			</h1>
			<h1 class="font-display text-xl md:text-2xl text-white m-0 mt-12 font-light">
				<slot name="para"/>
			</h1>
		</div>
		
	</div>

	<div
		class="row-start-2 col-start-1 col-span-8 mt-12 md:col-start-7 md:col-span-12 md:row-start-1"
		id="image-column"
	>
		<div class="">
			<img src="{image}" class="" alt="Lulu"/>
		</div>
	</div>
</div>
