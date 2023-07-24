<script>
	import { page } from "$app/stores";
	export let open = false;
	function handleClick() {
		open = false;
	}
</script>

<aside class="absolute w-full h-full bg-black shadow-lg z-20 m-0" class:open>
	<nav class="mt-3 pl-12 py-20 w-[70vw] flex font-light text-white text-2xl flex-col">
		<a class="" href="/" on:click={handleClick}><li class="appearance-none list-none font-display py-1 border-b-[1px] border-transparent w-1/3 sm:w-1/4 {($page.url.pathname === '/') ? 'selected' : ''}">Home</li></a>
		<a class=" font-display py-1 border-b-[1px] border-transparent {($page.url.pathname === '/About') ? 'selected' : ''} w-1/3 sm:w-1/4" href="/About" on:click={handleClick}>About</a>
		<a class=" font-display py-1 border-b-[1px] border-transparent {($page.url.pathname === '/Listen') ? 'selected' : ''} w-1/3 sm:w-1/4" href="/Listen" on:click={handleClick}>Listen</a>
		<a class=" font-display py-1 border-b-[1px] border-transparent {($page.url.pathname === '/LifeModelling') ? 'selected' : ''} w-3/4 sm:w-1/2" href="/LifeModelling" on:click={handleClick}>Life Modelling</a>


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

	a, li {
		margin-bottom: 1px;
		transition: border-color 0.3s ease-in-out;
	}

	a:hover, li:hover{
		border-color:rgb(187, 68, 4);

	}
</style>
