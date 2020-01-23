<template>
	<ul class="is-flex">
		<li
			class="mr-2"
			v-for="category in $static.allGeneralSiteSettings.edges[0].node
				.site_categories"
			:key="category.category_title"
		>
			<g-link
				:to="category.category_url_path"
				class="is-block"
				exact-active-class="test"
				exact
			>
				<div class="is-flex items-center h-8 has-background-white-ter rounded">
					<g-image :src="category.category_icon" class="ml-1" />
					<span class="is-size-7 ml-2 mr-3">
						{{ category.category_title }}
					</span>
				</div>
			</g-link>
		</li>
	</ul>
</template>

<static-query>
query AllGeneralSiteSettings {
  allGeneralSiteSettings {
    edges {
      node {
        site_categories {
          category_title
          category_url_path
          category_icon
        }
      }
    }
  }
}
</static-query>
