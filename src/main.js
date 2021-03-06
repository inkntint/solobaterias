import { Carousel, Icon, Autocomplete, Tag, Button } from "buefy";
import "circular-std";
import "./assets/sass/main.scss";
import "./assets/css/styles.css";
import "glider-js/glider.css";
import AppShell from "./layouts/AppShell";
import AppSection from "./components/AppSection";
import CarouselProductCard from "./components/CarouselProductCard";
import GliderJs from "./components/GliderJs";
import Vuex from "vuex";

export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex);
  appOptions.store = new Vuex.Store({
    state: {
      allProducts: []
    },
    mutations: {
      addProducts(state, payload) {
        state.allProducts = payload;
      }
    },
    getters: {
      getAllProducts(state) {
        return state.allProducts;
      }
    }
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css"
  });
  Vue.component("AppShell", AppShell);
  Vue.component("AppSection", AppSection);
  Vue.component("CarouselProductCard", CarouselProductCard);
  Vue.component("GliderJs", GliderJs);
  Vue.use(Carousel);
  Vue.use(Icon);
  Vue.use(Autocomplete);
  Vue.use(Tag);
  Vue.use(Button);
}
