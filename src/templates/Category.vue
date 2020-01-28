<template>
	<app-shell>
		<app-section class="pt-0">
			<template #title>
				{{ $page.category.title }}
			</template>
			<div class="has-background-white sticky top-0 left-0 right-0 z-300 mt-5">
				<Pager
					:info="$page.category.belongsTo.pageInfo"
					class="pager"
					aria-label="Navegación de productos"
					aria-first-label="Ir a la primera página"
					aria-link-label="Ir a la página %n"
					aria-prev-label="Ir a la página anterior. Página %n"
					aria-next-label="Ir a la página siguiente. Página %n"
					aria-current-label="Página actual. Página %n"
					aria-last-label="Ir a la última página. Página %n"
				/>
			</div>
			<ul class="grid justify-center md:justify-left mt-6">
				<li
					v-for="{ node } in $page.category.belongsTo.edges"
					:key="node.id"
					class="is-block"
				>
					<g-link :to="node.path">
						<g-image :src="node.images[0]" />
						<b-tag v-if="node.available">Disponible</b-tag>
						<b-tag v-else>Agotado</b-tag>
						<h1 class="mt-2 has-text-grey-dark is-size-6-tablet">
							{{ node.title }}
						</h1>
						<div
							class="mt-2 has-text-black-bis has-text-weight-semibold tracking-wide"
						>
							${{ node.unit_price }}
						</div>
					</g-link>
					<div
						class="mt-5 is-flex justify-end"
						v-if="node.available && node.sellable"
					>
						<b-button
							type="is-primary"
							icon-left="cart-outline"
							tag="a"
							:href="
								`${
									/^https:\/\//.test(node.payu_purchase_link)
										? node.payu_purchase_link
										: '#'
								}`
							"
							>Comprar</b-button
						>
					</div>
				</li>
			</ul>
		</app-section>
	</app-shell>
</template>

<page-query> 
query Category($path: String) {
  category(path: $path) {
    title
    path
    belongsTo {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on Product {
            path
            title
            available
            sellable
            unit_price
            payu_purchase_link
            images(width: 178, height: 178, fit: contain, background: "white")
          }
        }
      }
    }
  }
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
}
</page-query>

<script>
	import { Pager } from "gridsome";
	export default {
		name: "Category",
		data() {
			return {
				meta: {
					description:
						"Explora nuestra lista de productos y encuentra miles de rocas preciosas y únicas en la categoría de"
				}
			};
		},
		metaInfo() {
			return {
				title: this.$page.category.title,
				htmlAttrs: {
					lang: "es-CO"
				},
				meta: [
					{
						name: "title",
						content: `Categorías | ${this.$page.category.title}`
					},
					{
						name: "description",
						content: `${this.meta.description} ${this.$page.category.title}`
					},
					// og / facebook
					{
						property: "og:url",
						content: `${this.$page.allGeneralSiteSettings.edges[0].node.site_url}${this.$page.category.path}`
					},
					{
						property: "og:title",
						content: `Categorías | ${this.$page.category.title}`
					},
					{
						property: "og:description",
						content: `${this.meta.description} ${this.$page.category.title}`
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
						content: `${this.$page.allGeneralSiteSettings.edges[0].node.site_url}${this.$page.category.path}`
					},
					{
						property: "twitter:title",
						content: `Categorías | ${this.$page.category.title}`
					},
					{
						property: "twitter:description",
						content: `${this.meta.description} ${this.$page.category.title}`
					},
					{
						property: "twitter:image",
						content: `${this.$page.allGeneralSiteSettings.edges[0].node.site_url}/og.jpg`
					}
				]
			};
		},
		components: {
			Pager
		}
	};
</script>

<style scoped>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(178px, min-content));
	}
	@media screen and (min-width: 768px) {
		.md\:justify-left {
			justify-content: left;
		}
	}
</style>
