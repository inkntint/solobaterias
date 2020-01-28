<template>
  <app-shell>
    <app-section class="pt-0">
      <div class="columns">
        <div class="column is-two-fifths">
          <b-carousel :autoplay="false" :indicator="false" with-carousel-list>
            <b-carousel-item
              v-for="(image, i) in $page.product.images"
              :key="i"
            >
              <g-image
                :src="image"
                :alt="$page.product.title"
                class="carousel__main-img image w-full object-fit-contain"
              />
            </b-carousel-item>
            <template #list="props">
              <b-carousel-list
                v-model="props.active"
                :data="$page.product.images"
                @switch="props.switch($event, false)"
                :has-grayscale="true"
                :style="{ ['--image-count']: $page.product.images.length }"
                as-indicator
              >
                <template #item="{ list }">
                  <g-image
                    :src="list"
                    :alt="$page.product.title"
                    class="image"
                  />
                </template>
              </b-carousel-list>
            </template>
          </b-carousel>
        </div>
        <div class="column is-5 is-offset-1">
          <div class="-ml-1">
            <b-tag class="m-1">{{ $page.product.category.title }}</b-tag>
            <b-tag v-if="$page.product.available" class="m-1">Disponible</b-tag>
            <b-tag v-else class="m-1">Agotado</b-tag>
          </div>
          <h1 class="mt-3 has-text-grey-dark is-size-5">
            {{ $page.product.title }}
          </h1>
          <div
            class="mt-2 has-text-black-bis has-text-weight-semibold tracking-wide"
          >
            ${{ $page.product.unit_price }}
          </div>
          <div class="mt-6 -ml-4 mr-4">
            <b-button
              v-if="$page.product.available && $page.product.sellable"
              class="m-4"
              type="is-primary"
              icon-left="cart-outline"
              expanded
              tag="a"
              :href="
                `${
                  /^https:\/\//.test($page.product.payu_purchase_link)
                    ? $page.product.payu_purchase_link
                    : '#'
                }`
              "
            >
              Comprar con PayU
            </b-button>
            <b-button
              class="m-4 has-text-primary-dark"
              type="is-primary"
              icon-left="whatsapp"
              tag="a"
              :href="
                `https://wa.me/573122427586?text=Hola, estoy interesado en este producto: https://esmeralda3.com${$page.product.path}`
              "
              outlined
              expanded
            >
              Preguntar por este producto
            </b-button>
          </div>
          <div class="content mt-6" v-html="$page.product.content" />
        </div>
      </div>
    </app-section>
  </app-shell>
</template>

<page-query>
query($path: String) {
  product(path: $path) {
    title
    description
    path
    available
    sellable
    category {
      title
    }
    unit_price
    content
    payu_purchase_link
    images(width: 320, height: 320, quality: 85, fit: contain, background: "white")
  }
  allGeneralSiteSettings {
    edges {
      node {
        logo(width: 150, quality: 100)
        hero_img(width: 1920)
		    hero_message
        site_url
      }
    }
  }
}
</page-query>

<script>
export default {
  name: "Product",
  metaInfo() {
    return {
      title: `${this.$page.product.title} | $${this.$page.product.unit_price}`,
      headAttrs: {
        prefix:
          "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#"
      },
      htmlAttrs: {
        lang: "es-CO"
      },
      meta: [
        {
          name: "title",
          content: `${this.$page.product.title} | $${this.$page.product.unit_price}`
        },
        {
          name: "description",
          content: `${this.$page.product.description}`
        },
        // og / facebook
        {
          property: "og:url",
          content: `${this.$page.allGeneralSiteSettings.edges[0].node.site_url}${this.$page.product.path}`
        },
        {
          property: "og:title",
          content: `${this.$page.product.title} | $${this.$page.product.unit_price}`
        },
        {
          property: "og:description",
          content: `${this.$page.product.description}`
        },
        {
          property: "og:image",
          content: `${this.$page.allGeneralSiteSettings.edges[0].node.site_url}${this.$page.product.images[0].src}`
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "es_CO" },
        // twitter
        { property: "twitter:card", content: "summary_large_image" },
        {
          property: "twitter:url",
          content: `${this.$page.allGeneralSiteSettings.edges[0].node.site_url}${this.$page.product.path}`
        },
        {
          property: "twitter:title",
          content: `${this.$page.product.title} | $${this.$page.product.unit_price}`
        },
        {
          property: "twitter:description",
          content: `${this.$page.product.description}`
        },
        {
          property: "twitter:image",
          content: `${this.$page.allGeneralSiteSettings.edges[0].node.site_url}${this.$page.product.images[0].src}`
        }
      ]
    };
  }
};
</script>

<style>
.carousel-list {
  margin-top: 2px;
}
.carousel-list .carousel-slides {
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(var(--image-count), 1fr);
}
.carousel-list .carousel-slides .carousel-slide {
  border: 0;
}
.carousel-list.has-shadow {
  box-shadow: none;
}
.carousel__main-img {
  max-height: var(--spacing-80);
}
</style>
