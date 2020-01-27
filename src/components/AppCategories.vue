<template>
	<ul class="category-list is-flex flex-wrap -ml-1">
		<li
			v-for="{ node } in $static.allCategory.edges"
			:key="node.title"
			class="m-1 flex-shrink-0"
		>
			<g-link :to="node.path" class="is-block" active-class="category--active">
				<div class="is-flex items-center h-8 has-background-white-ter rounded">
					<span class="text-sm mx-3 has-text-grey-dark tracking-wide">
						{{ node.title }} ({{ node.belongsTo.totalCount }})
					</span>
				</div>
			</g-link>
		</li>
	</ul>
</template>

<static-query>
query AllCategory {
  allCategory {
    edges {
      node {
        title
        path
        belongsTo {
          totalCount
        }
      }
    }
  }
}
</static-query>
