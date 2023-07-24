<script>
	import { page } from "$app/stores";
	export let open = false;
	function handleClick() {
		open = false;
	}
</script>

<aside class="absolute w-full h-full bg-black shadow-lg z-20 m-0" class:open>
	<nav class="mt-3 px-12 py-20 pr-64 font-light text-white text-2xl flex flex-col">
		<a class="font-display py-1 border-b-[1px] border-transparent {($page.url.pathname === '/') ? 'selected' : ''}" href="/" on:click={handleClick}>Home</a>
		<a class=" font-display py-1 border-b-[1px] border-transparent {($page.url.pathname === '/About') ? 'selected' : ''}" href="/About" on:click={handleClick}>About</a>
		<a class=" font-display py-1 border-b-[1px] border-transparent {($page.url.pathname === '/Listen') ? 'selected' : ''}" href="/Listen" on:click={handleClick}>Listen</a>
		<a class=" font-display py-1 border-b-[1px] border-transparent {($page.url.pathname === '/LifeModelling') ? 'selected' : ''}" href="/LifeModelling" on:click={handleClick}>Life Modelling</a>


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

	.selected {
		color: rgb(187, 68, 4);
		border-color: rgb(187, 68, 4);
	}

	a {
		margin-bottom: 1px;
		transition: border-color 0.3s ease-in-out;
	}

	a:hover {
		border-color:rgb(187, 68, 4);

	}
</style>
