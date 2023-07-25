import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as ImageTextBlock } from "../../../chunks/ImageTextBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="my-12">${validate_component(ImageTextBlock, "ImageTextBlock").$$render(
    $$result,
    {
      image: "./images/296234426_730520888032324_8021256300183891083_n.jpeg"
    },
    {},
    {
      para: () => {
        return `<span slot="para" data-svelte-h="svelte-c1pkgt"></span>`;
      },
      title: () => {
        return `<span slot="title" data-svelte-h="svelte-1foohjf">My name&#39;s Lulu Ilanda....</span>`;
      }
    }
  )}</div> ${$$result.head += `<!-- HEAD_svelte-4i7com_START -->${$$result.title = `<title>About Lulu Ilanda</title>`, ""}<meta name="description" content="Learn about Lulu and her creative practice."><!-- HEAD_svelte-4i7com_END -->`, ""}`;
});
export {
  Page as default
};
