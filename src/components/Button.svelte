<script>
	export let buttons = [{ content: 'Review my loan', link: '/Review' }];
	export let paddingBlock = 'my-12';
	export let marginRight = 'mr-1';
	export let otherCss = '';
</script>

<div class="flex font-display font-light {paddingBlock} text-white">
	{#each buttons as button}
		<a href={button.link} class="flex buttons py-3 px-3 {marginRight} {otherCss} md:md:px-6 text-sm md:md:text-md font-display font-light">
			<p
			class="m-0 p-0 flex flex-col flex-grow" 

			
			>{button.content}</p>
			<svg class="flex self-center m-0 p-0 ml-1" width='1em' height='1.09em' viewBox='0 0 45 28' xmlns='http://www.w3.org/2000/svg'><path d='M.5 15.273h39.142L29.241 25.7l1.796 1.8L44.5 14 31.039.5l-1.796 1.8L39.64 12.727H.5z' fill-rule='evenodd'/></svg>
		</a>
		
	{/each}
</div>

<style (lang="postcss" )>

	svg {
		content: '';
		display: inline-block;
		-webkit-transition: all 0.1s ease-in-out;
		transition: all 0.1s ease-in-out;
		fill: #fff;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.buttons:hover svg {
		-webkit-transform: translateX(5px);
		transform: translateX(5px);
		transition: transform 0.2s ease-in-out;

	}
	

    div, a, svg {
        transition: all 0.1s ease-in-out;
    }
</style>
