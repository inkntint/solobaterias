import { Carousel } from "buefy";
import "./assets/sass/main.scss";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css"
  });
  Vue.use(Carousel);
}
