<template>
	<app-section
		:path-to-category="$static.allProduct.edges[0].node.category.path"
		class="pt-0"
	>
		<template #subtitle>
			Más recientes
		</template>
		<template #title>
			{{ $static.allProduct.edges[0].node.category.title }}
		</template>
		<glider-js :items-count="$static.allProduct.totalCount" class="mt-5">
			<carousel-product-card
				v-for="{ node } in $static.allProduct.edges"
				:key="node.id"
				:available="node.available"
				:path="node.path"
				:title="node.title"
				:unit-price="node.unit_price"
				:sellable="node.sellable"
				:purchase-link="node.payu_purchase_link"
			>
				<template #product-image>
					<g-image
						:src="node.images[0]"
						:alt="node.title"
						class="is-block pointer-events-none"
					/>
				</template>
			</carousel-product-card>
		</glider-js>
	</app-section>
</template>

<static-query>
query AllProduct {
  allProduct(filter: { category: { eq: "Celulares" } }, limit: 10) {
    totalCount
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
        sellable
        payu_purchase_link
        images(width: 240, height: 240, fit: contain, background: "white")
      }
    }
  }
}
</static-query>
