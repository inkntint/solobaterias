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
								:src="$page.allGeneralSiteSettings.edges[0].node.logo"
								alt="Logo"
							/>
						</g-link>
					</div>
				</div>
				<div class="level-right">
					<div class="level-item">
						<a href="https://wa.me/00000000000" class="leading-none">
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
								{{ $page.allGeneralSiteSettings.edges[0].node.hero_message }}
							</h1>
						</div>
					</div>
					<div class="columns is-gapless">
						<div class="column is-6 mx-auto">
							<b-autocomplete
								v-model="product"
								:data="filteredDataArray"
								placeholder="Buscar por minerales, cuarzos, gemas, opalos..."
								icon="magnify"
								size="is-medium"
								:clear-on-select="true"
								field="title"
							>
								<template #default="{ option: { node } }">
									<g-link class="media" :to="node.path">
										<div class="media-left">
											<g-image :src="node.images[0]" :alt="node.title" />
										</div>
										<div class="media-content">
											<h6 class="has-text-grey-dark">{{ node.title }}</h6>
											<span
												class="has-text-black-bis has-text-weight-semibold tracking-wide"
												>${{ node.unit_price }}</span
											>
											<b-tag class="m-1">{{ node.category.title }}</b-tag>
											<b-tag v-if="node.available" class="m-1"
												>Disponible</b-tag
											>
											<b-tag v-else class="m-1">Agotado</b-tag>
										</div>
									</g-link>
								</template>
								<template #empty> <span></span> </template>
								<template #footer>
									<span class="has-text-gray has-text-size-7">
										No puedes encontrar
										<strong>"{{ product }}"</strong>?
									</span>
									<a
										:href="
											`https://wa.me/000000000?text=Hola, estoy buscando: ${product}`
										"
										class="has-text-info hast-text-size-7"
									>
										<b-icon icon="whatsapp" size="is-small" />Pregúntame en
										WhatsApp
									</a>
								</template>
							</b-autocomplete>
						</div>
					</div>
				</div>
			</div>
		</div>
		<g-image
			:src="$page.allGeneralSiteSettings.edges[0].node.hero_img"
			:alt="$page.allGeneralSiteSettings.edges[0].node.hero_message"
			class="object-fit-cover w-full h-full is-block"
		/>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				product: "",
				allProducts: []
			};
		},
		computed: {
			filteredDataArray() {
				return this.$store.getters.getAllProducts.filter(({ node }) => {
					return (
						node.title
							.toString()
							.toLowerCase()
							.indexOf(this.product.toLowerCase()) >= 0
					);
				});
			}
		}
	};
</script>

<style scoped>
	a.dropdown-item {
		padding-right: var(--spacing-4);
	}
	.autocomplete .dropdown-item.is-disabled {
		padding: 0;
	}
</style>
