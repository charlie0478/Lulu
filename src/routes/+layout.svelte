<script>
  import "../app.css";
  import Navbar from "../components/Navbar/HamburgerNav/Hamburgermenu.svelte";
  import Navbar2 from "../components/Navbar/FullSizeNav/Navbar.svelte";
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  let isMobile = writable(true);
  
  onMount(() => {
      const handleResize = () => {
          isMobile.set(window.innerWidth < 768 || window.innerHeight < 600 && window.innerWidth < 1024);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  });
</script>

{#if $isMobile}
<Navbar/>
{:else} 
<Navbar2/>
{/if}

<slot />