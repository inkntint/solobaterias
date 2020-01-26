<template>
  <section class="section">
    <div class="container">
      <span class="is-size-7 is-uppercase tracking-wide">
        <slot name="subtitle" />
      </span>
      <h3 class="is-size-5 has-text-black-ter">
        <slot name="title" />
      </h3>
      <slot />
      <g-link
        v-if="pathToCategory"
        :to="pathToCategory"
        class="has-text-primary-dark is-inline-block mt-5"
      >
        Ver todas
      </g-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pathToCategory: {
      type: String
    }
  }
};
</script>
