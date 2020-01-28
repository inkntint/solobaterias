<template>
  <app-shell>
    <q-precious-stones />
    <q-semi-precious-stones />
    <q-fossil />
    <q-rares />
    <q-others />
  </app-shell>
</template>

<static-query>
query AllGeneralSiteSettings {
  allGeneralSiteSettings {
    edges {
      node {
        site_url
      }
    }
  }
}
</static-query>

<script>
import QPreciousStones from "../components/QPreciousStones";
import QSemiPreciousStones from "../components/QSemiPreciousStones";
import QFossil from "../components/QFossil";
import QRares from "../components/QRares";
import QOthers from "../components/QOthers";

export default {
  name: "Home",
  data() {
    return {
      meta: {
        title:
          "Venta y talla de miles de rocas preciosas, semipreciosas y fósiles",
        description:
          "En Esmeralda3 vendemos y tallamos todo tipo de rocas preciosas y semipreciosas, con un inventario de más de 10.000 piezas entre meteoritos, raras y más"
      }
    };
  },
  metaInfo() {
    return {
      title: this.meta.title,
      htmlAttrs: {
        lang: "es-CO"
      },
      meta: [
        {
          name: "title",
          content: this.meta.title
        },
        {
          name: "description",
          content: this.meta.description
        },
        // og / facebook
        {
          property: "og:url",
          content: this.$static.allGeneralSiteSettings.edges[0].node.site_url
        },
        {
          property: "og:title",
          content: this.meta.title
        },
        {
          property: "og:description",
          content: this.meta.description
        },
        {
          property: "og:image",
          content: `${this.$static.allGeneralSiteSettings.edges[0].node.site_url}/og.jpg`
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "es_CO" },
        // twitter
        { property: "twitter:card", content: "summary_large_image" },
        {
          property: "twitter:url",
          content: this.$static.allGeneralSiteSettings.edges[0].node.site_url
        },
        {
          property: "twitter:title",
          content: this.meta.title
        },
        {
          property: "twitter:description",
          content: this.meta.description
        },
        {
          property: "twitter:image",
          content: `${this.$static.allGeneralSiteSettings.edges[0].node.site_url}/og.jpg`
        }
      ]
    };
  },
  components: {
    QSemiPreciousStones,
    QPreciousStones,
    QFossil,
    QRares,
    QOthers
  }
};
</script>
