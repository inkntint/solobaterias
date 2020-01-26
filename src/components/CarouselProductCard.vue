<template>
  <div>
    <slot name="product-image" />
    <div class="mt-2">
      <b-tag v-if="available">Disponible</b-tag>
      <b-tag v-else>Agotado</b-tag>
      <g-link :to="path">
        <h1 class="mt-2 has-text-grey-dark is-size-7-mobile is-size-6-tablet">
          {{ title }}
        </h1>
        <div
          class="mt-2 has-text-black-bis has-text-weight-semibold tracking-wide"
        >
          ${{ unitPrice }}
        </div>
      </g-link>
    </div>
    <div class="mt-5 is-flex justify-end" v-if="available || sellable">
      <b-button
        type="is-primary"
        icon-left="cart-outline"
        tag="a"
        :href="`${/^https:\/\//.test(purchaseLink) ? purchaseLink : '#'}`"
        >Comprar</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    available: {
      type: Boolean,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    unitPrice: {
      type: String,
      required: true
    },
    sellable: {
      type: Boolean,
      required: true
    },
    purchaseLink: {
      type: String,
      required: true
    }
  }
};
</script>
