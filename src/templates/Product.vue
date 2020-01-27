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
				<div class="column is-offset-1">
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
					<div class="content mt-6" v-html="$page.product.content" />
				</div>
			</div>
		</app-section>
	</app-shell>
</template>

<script>
	export default {
		data() {
			return {};
		}
	};
</script>

<page-query>
query($path: String) {
  product(path: $path) {
    title
    available
    category {
      title
    }
    unit_price
    content
    images(width: 320, height: 320, quality: 85, fit: contain, background: "white")
  }
}
</page-query>

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