<template>
  <section class="h-90 sm:h-60 transition-bounce is-relative">
    <div class="is-overlay bg-black-transparent is-flex flex-col">
      <header
        class="level is-mobile px-6 h-14 sm:h-16 is-marginless flex-shrink-0"
      >
        <div class="level-left">
          <div class="level-item">
            <g-link to="/">
              <g-image
                :src="$static.allGeneralSiteSettings.edges[0].node.logo"
                alt="Logo"
              />
            </g-link>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <a href="https://wa.me/" class="leading-none">
              <b-icon icon="whatsapp" type="is-white" />
            </a>
          </div>
        </div>
      </header>
      <div class="h-full is-flex">
        <div class="container px-6 sm:px-0 mx-auto self-center">
          <div class="columns is-gapless">
            <div class="column is-full">
              <h1 class="is-size-4 has-text-white has-text-centered-tablet">
                {{ $static.allGeneralSiteSettings.edges[0].node.hero_message }}
              </h1>
            </div>
          </div>
          <div class="columns is-gapless">
            <div class="column is-6 mx-auto">
              <b-autocomplete
                v-model="name"
                :data="filteredDataArray"
                placeholder="Buscar por minerales, cuarzos, gemas, opalos..."
                icon="magnify"
                size="is-medium"
                @select="option => (selected = option)"
              >
                <template slot="empty">
                  No se han encontrado resultados para
                  <strong>"{{ name }}"</strong>
                </template>
              </b-autocomplete>
            </div>
          </div>
        </div>
      </div>
    </div>
    <g-image
      :src="$static.allGeneralSiteSettings.edges[0].node.hero_img"
      :alt="$static.allGeneralSiteSettings.edges[0].node.hero_message"
      class="object-fit-cover w-full h-full is-block"
    />
  </section>
</template>

<static-query>
query AllGeneralSiteSettings {
  allGeneralSiteSettings {
    edges {
      node {
        logo(width: 50)
        hero_img(width: 1920)
		hero_message
      }
    }
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      data: [
        "Angular",
        "Angular 2",
        "Aurelia",
        "Backbone",
        "Ember",
        "jQuery",
        "Meteor",
        "Node.js",
        "Polymer",
        "React",
        "RxJS",
        "Vue.js"
      ],
      name: "",
      selected: null
    };
  },
  computed: {
    filteredDataArray() {
      return this.data.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  }
};
</script>
