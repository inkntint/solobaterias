<template>
  <div>
    <site-categories />
    <ul>
      <li v-for="{ node } in $page.allProduct.edges" :key="node.id">
        <h6>
          {{ node.title }}
        </h6>
        <g-link :to="node.path">ver</g-link>
        <p>
          Categoria:
          <g-link to="/piedras-preciosas">{{ node.category.title }}</g-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<page-query>
query AllProduct {
  allProduct {
    edges {
      node {
        id
        title
        path
        category {
          title
        }
      }
    }
  }
}
</page-query>

<script>
import SiteCategories from "../components/SiteCategories";
export default {
  components: {
    SiteCategories
  },
  mounted() {
    // console.log(this.$page.allProduct.edges)
  }
};
</script>
