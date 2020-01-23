<template>
	<ul>
		<li v-for="{ node } in $page.category.belongsTo.edges" :key="node.id">
			<g-link :to="node.path">
				<h6>
					{{ node.title }}
				</h6>
			</g-link>
		</li>
	</ul>
</template>

<page-query>
query Category ($path: String) {
  category(path: $path) {
    belongsTo {
      edges {
        node {
          ... on Product {
            path
            title
          }
        }
      }
    }
  }
}
</page-query>
