import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
/* empty css                                                 */import { w as writable } from "../../chunks/index.js";
const app = "";
const Logo_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "img.svelte-j9hrow{transition:border-color 0.3s ease-in-out;margin-bottom:1px}img.svelte-j9hrow:hover,.selected.svelte-j9hrow{border-color:rgb(187, 68, 4)}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<p class="font-display text-white my-auto" data-svelte-h="svelte-1gnzb1d">Menu</p> <div class="flex rounded-full ml-auto max-w-24 max-h-24"><a href="/"><img src="./images/profilepicture.jpeg" alt="Lulu Profile" class="${"" + escape($page.url.pathname === "/" ? "selected" : "", true) + " flex rounded-full ml-auto max-w-24 max-h-24 border-b-[1px] border-transparent svelte-j9hrow"}"></a> </div>`;
});
const Hamburger_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-18a5md6.svelte-18a5md6{min-height:24px;transition:transform 0.3s ease-in-out}svg.svelte-18a5md6 line.svelte-18a5md6{stroke:currentColor;stroke-width:1;transition:all 0.3s ease-in-out}button.svelte-18a5md6.svelte-18a5md6{z-index:20}.open.svelte-18a5md6 svg.svelte-18a5md6{transform:scale(0.7);color:rgb(187, 68, 4)}.open.svelte-18a5md6 #top.svelte-18a5md6{transform:translate(6px, 0px) rotate(45deg)}.open.svelte-18a5md6 #middle.svelte-18a5md6{opacity:0}.open.svelte-18a5md6 #bottom.svelte-18a5md6{transform:translate(-12px, 9px) rotate(-45deg)}",
  map: null
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$2);
  return `<button class="${[
    "text-white font-display cursor-pointer mr-4 border-none focus:outline-none svelte-18a5md6",
    open ? "open" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-13dbx7l"><svg width="32" height="24" class="svelte-18a5md6"><line id="top" x1="0" y1="2" x2="32" y2="2" class="svelte-18a5md6"></line><line id="middle" x1="0" y1="12" x2="24" y2="12" class="svelte-18a5md6"></line><line id="bottom" x1="0" y1="22" x2="32" y2="22" class="svelte-18a5md6"></line></svg> </button>`;
});
const Navbar$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sidebar = false } = $$props;
  if ($$props.sidebar === void 0 && $$bindings.sidebar && sidebar !== void 0)
    $$bindings.sidebar(sidebar);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<header class="flex justify-between black py-2 items-center text-white "><nav class="flex flex-row w-full mt-3 mb-3 md:mx-12 mx-6 self-center">${validate_component(Hamburger, "Hamburger").$$render(
      $$result,
      { open: sidebar },
      {
        open: ($$value) => {
          sidebar = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</nav></header>`;
  } while (!$$settled);
  return $$rendered;
});
const Sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "aside.svelte-1gxhuuo{left:-100%;transition:left 0.3s ease-in-out}.open.svelte-1gxhuuo{left:0}.selected.svelte-1gxhuuo{color:rgb(187, 68, 4);border-color:rgb(187, 68, 4)}a.svelte-1gxhuuo,li.svelte-1gxhuuo{margin-bottom:1px;transition:border-color 0.3s ease-in-out}a.svelte-1gxhuuo:hover,li.svelte-1gxhuuo:hover{border-color:rgb(187, 68, 4)}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<aside class="${[
    "absolute w-full h-full bg-black shadow-lg z-20 m-0 svelte-1gxhuuo",
    open ? "open" : ""
  ].join(" ").trim()}"><nav class="mt-3 pl-12 py-20 w-[70vw] flex font-light text-white text-2xl flex-col"><a class=" svelte-1gxhuuo" href="/"><li class="${"appearance-none list-none font-display py-1 border-b-[1px] border-transparent w-1/3 sm:w-1/4 " + escape($page.url.pathname === "/" ? "selected" : "", true) + " svelte-1gxhuuo"}">Home</li></a> <a class="${"font-display py-1 border-b-[1px] border-transparent " + escape($page.url.pathname === "/About" ? "selected" : "", true) + " w-1/3 sm:w-1/4 svelte-1gxhuuo"}" href="/About">About</a> <a class="${"font-display py-1 border-b-[1px] border-transparent " + escape($page.url.pathname === "/Listen" ? "selected" : "", true) + " w-1/3 sm:w-1/4 svelte-1gxhuuo"}" href="/Listen">Listen</a> <a class="${"font-display py-1 border-b-[1px] border-transparent " + escape(
    $page.url.pathname === "/LifeModelling" ? "selected" : "",
    true
  ) + " w-3/4 sm:w-1/2 svelte-1gxhuuo"}" href="/LifeModelling">Life Modelling</a></nav> </aside>`;
});
const Hamburgermenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Sidebar, "Sidebar").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Navbar$1, "Navbar").$$render(
      $$result,
      { sidebar: open },
      {
        sidebar: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:black}.selected.svelte-qz7fme{color:rgb(187, 68, 4);border-color:rgb(187, 68, 4)}li.svelte-qz7fme,#profile.svelte-qz7fme{margin-bottom:1px;transition:border-color 0.3s ease-in-out}li.svelte-qz7fme:hover,#profile.svelte-qz7fme:hover{border-color:rgb(187, 68, 4)}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<nav class="flex flex-row flex-grow-1 max-w-96 "><a href="/"><img src="./images/profilepicture.jpeg" id="profile" alt="Lulu Profile" class="${"" + escape(
    $page.url.pathname === "/" || $page.url.pathname === "" ? "selected" : "",
    true
  ) + " text-white inline-flex rounded-full max-w-24 max-h-24 mx-12 my-6 border-b-[1px] border-transparent svelte-qz7fme"}"></a> <ul class="flex flex-row flex-grow-1 mx-auto justify-end w-full px-12 wx-12 my-16 font-display"><li class="${escape($page.url.pathname === "/About" ? "selected" : "", true) + " border-b-[1px] border-transparent text-white mx-3 relative svelte-qz7fme"}"><a href="/About" data-svelte-h="svelte-6u97gp">About</a></li> <li class="${escape($page.url.pathname === "/Listen" ? "selected" : "", true) + " border-b-[1px] border-transparent text-white mx-3 relative svelte-qz7fme"}"><a href="/Listen" data-svelte-h="svelte-l450r7">Listen</a></li> <li class="${escape(
    $page.url.pathname === "/LifeModelling" ? "selected" : "",
    true
  ) + " border-b-[1px] border-transparent text-white mx-3 relative svelte-qz7fme"}"><a href="/LifeModelling" data-svelte-h="svelte-199z9jx">Life Modelling</a></li></ul> </nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobile, $$unsubscribe_isMobile;
  let isMobile = writable(true);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_isMobile();
  return `${$isMobile ? `${validate_component(Hamburgermenu, "Navbar").$$render($$result, {}, {}, {})}` : `${validate_component(Navbar, "Navbar2").$$render($$result, {}, {}, {})}`} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
