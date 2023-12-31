import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<iframe class="mx-auto md:w-1/2 lg-md:w-1/4 w-3/4 mt-6" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/588767904&color=%23bb5404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe> <iframe height="300" scrolling="no" frameborder="no" allow="autoplay" class="mx-auto md:w-1/2 lg-md:w-1/4 w-3/4 my-12" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/702705951&color=%23bb5404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
});
export {
  Page as default
};
