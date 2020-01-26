<template>
	<app-section class="pt-0">
		<span class="is-size-7 is-uppercase tracking-wide">Más recientes</span>
		<h3 class="is-size-5 has-text-black-ter">
			{{ $static.allProduct.edges[0].node.category.title }}
		</h3>
		<glider-js :items-count="$static.allProduct.edges.length" class="mt-5">
			<div v-for="{ node } in $static.allProduct.edges" :key="node.id">
				<div class="is-relative z-100">
					<g-image
						:src="node.images[0]"
						:alt="node.title"
						class="is-block rounded w-full"
					/>
					<div
						class="product__item is-flex items-center absolute z-200 bottom-0 left-0 right-0 h-12 px-4 rounded-b"
					>
						<b-tooltip label="Destacado" type="is-dark" animated>
							<b-icon
								icon="star"
								type="is-warning"
								class="mr-2"
								v-if="node.featured"
							/>
						</b-tooltip>
						<div class="has-text-white has-text-weight-medium tracking-wide">
							${{ node.unit_price }}
						</div>
					</div>
				</div>
				<div class="mt-2">
					<b-tag v-if="node.available">Disponible</b-tag>
					<b-tag v-else>Agotado</b-tag>
					<g-link :to="node.path">
						<h1
							class="mt-2 has-text-black-ter is-size-7-mobile is-size-6-tablet"
						>
							{{ node.title }}
						</h1>
					</g-link>
				</div>
				<div
					class="mt-5 is-flex justify-end"
					v-if="node.available || node.sellable"
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
			</div>
		</glider-js>
		<g-link
			:to="$static.allProduct.edges[0].node.category.path"
			class="has-text-primary-dark is-inline-block mt-5"
		>
			<span class="inline-flex items-center">
				Ver todas
				<b-icon icon="chevron-right" class="leading-none" />
			</span>
		</g-link>
	</app-section>
</template>

<static-query>
query AllProduct {
  allProduct(filter: { category: { eq: "Semi preciosas" } }, limit: 10) {
    edges {
      node {
        id
        path
        title
        category {
          title
          path
        }
        available
        unit_price
        featured
        sellable
        payu_purchase_link
        images(width: 250, height: 200)
      }
    }
  }
}
</static-query>

<script>
	import GliderJs from "./GliderJs";
	export default {
		components: {
			GliderJs
		}
	};
</script>

<style>
	.glider::-webkit-scrollbar {
		display: none;
	}
	.product__item {
		background: #00000017;
		background: rgba(0, 0, 0, 0);
		background: -webkit-linear-gradient(
			top,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.9)
		);
		background: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
	}
</style>