<template>
	<app-shell>
		<q-baterias></q-baterias>
		<q-celulares></q-celulares>
		<q-accesorios></q-accesorios>
	</app-shell>
</template>

<page-query>
query {
  allGeneralSiteSettings {
    edges {
      node {
        logo(width: 150, quality: 100)
        hero_img(width: 1920)
		    hero_message
        site_url
      }
    }
  }
  allProduct {
    edges {
      node {
        id
        path
        title
        category {
          title
        }
        available
        unit_price
        images(width: 48, height: 48, fit: contain, background: "white", quality: 100)
      }
    }
  }
}
</page-query>

<script>
	import QBaterias from "../components/QBaterias";
	import QCelulares from "../components/QCelulares";
	import QAccesorios from "../components/QAccesorios";

	export default {
		name: "Home",
		data() {
			return {
				meta: {
					title:
						"Distribuidor y fabricador de baterías para todo tipo de celulares",
					description:
						"En Solo Baterías distribuimos y fabricamos todo tipo de baterías para celulares con distribución en toda Medellín"
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
						content: this.$page.allGeneralSiteSettings.edges[0].node.site_url
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
						content: `${this.$page.allGeneralSiteSettings.edges[0].node.site_url}/og.jpg`
					},
					{ property: "og:type", content: "website" },
					{ property: "og:locale", content: "es_CO" },
					// twitter
					{ property: "twitter:card", content: "summary_large_image" },
					{
						property: "twitter:url",
						content: this.$page.allGeneralSiteSettings.edges[0].node.site_url
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
						content: `${this.$page.allGeneralSiteSettings.edges[0].node.site_url}/og.jpg`
					}
				]
			};
		},
		components: {
			QCelulares,
			QBaterias,
			QAccesorios
		},
		mounted() {
			this.$store.commit("addProducts", this.$page.allProduct.edges);
		}
	};
</script>
