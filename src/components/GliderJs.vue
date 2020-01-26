<template>
  <div class="glider-contain">
    <div ref="glider">
      <div class="glider-track grid" :style="{ ['--grid-items']: itemsCount }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Glider from "glider-js";

export default {
  props: {
    itemsCount: {
      type: Number,
      required: true
    }
  },
  mounted() {
    new Glider(this.$refs.glider, {
      slidesToShow: "auto",
      itemWidth: 240,
      exactWidth: true,
      draggable: true,
      skipTrack: true
    });
  }
};
</script>

<style>
.grid {
  display: grid;
  gap: var(--spacing-4);
  grid-template-columns: repeat(var(--grid-items), 1fr);
}
.glider-prev,
.glider-next {
  top: 20%;
  font-size: 24px;
  height: 36px;
  width: 36px;
}
.glider-prev {
  left: -18px;
}
.glider-next {
  right: -18px;
}
</style>
