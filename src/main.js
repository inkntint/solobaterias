import { Carousel, Icon, Autocomplete, Tag } from "buefy";
import "circular-std";
import "./assets/sass/main.scss";
import "./assets/css/styles.css";
import AppShell from "./layouts/AppShell";
import AppSection from "./components/AppSection";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css"
  });
  Vue.component("AppShell", AppShell);
  Vue.component("AppSection", AppSection);
  Vue.use(Carousel);
  Vue.use(Icon);
  Vue.use(Autocomplete);
  Vue.use(Tag);
}
