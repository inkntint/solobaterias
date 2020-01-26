<template>
  <ul class="category-list is-flex flex-wrap">
    <li
      v-for="{ node } in $static.allCategory.edges"
      :key="node.title"
      class="m-1 flex-shrink-0"
    >
      <g-link :to="node.path" class="is-block" exact-active-class="exact" exact>
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

<style>
.category-list::-webkit-scrollbar {
  display: none;
}
</style>
