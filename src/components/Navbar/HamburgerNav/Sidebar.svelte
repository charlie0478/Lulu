<script>
	export let open = false;
	function handleClick() {
		open = false;
	}
</script>

<aside class="absolute w-full h-full bg-black shadow-lg z-20 m-0" class:open>
	<nav class="mt-3 px-12 py-20 font-light text-white text-2xl">
		<a class="block font-display py-1" href="/" on:click={handleClick}>Home</a>
		<a class="block font-display py-1" href="/About" on:click={handleClick}>About</a>
		<a class="block font-display py-1" href="/Listen" on:click={handleClick}>Listen</a>
		<a class="block font-display py-1" href="/LifeModelling" on:click={handleClick}>Life Modelling</a>


	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}
</style>
