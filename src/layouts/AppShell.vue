<template>
  <div>
    <app-header />
    <app-section>
      <app-categories />
    </app-section>
    <slot />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppCategories from "../components/AppCategories";

export default {
  components: {
    AppHeader,
    AppCategories
  }
};
</script>
