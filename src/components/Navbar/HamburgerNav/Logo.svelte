<script>
import { page } from "$app/stores";
</script>


<p class="font-display text-white my-auto">Menu</p>
<div class="flex rounded-full ml-auto max-w-24 max-h-24">
    <a href="/"><img src="./images/profilepicture.jpeg" alt="Lulu Profile" class=" {($page.url.pathname === '/') ? 'selected' : ''} flex rounded-full ml-auto max-w-24 max-h-24 border-b-[1px] border-transparent"/></a>
</div>
<style>
    img {
        transition: border-color 0.3s ease-in-out;
        margin-bottom: 1px;
    }
    img:hover, .selected {
        border-color:rgb(187, 68, 4);
    }


</style>