<template>
	<div class="glider-contain">
		<div class="glider">
			<div class="glider-track grid" :style="{ ['--grid-items']: itemsCount }">
				<slot />
			</div>
		</div>
		<b-button
			icon-right="chevron-left"
			role="button"
			aria-label="Anterior"
			class="glider-prev rounded-full has-text-black-ter shadow-md has-background-white"
			outlined
		/>
		<b-button
			icon-right="chevron-right"
			role="button"
			aria-label="Siguiente"
			class="glider-next rounded-full has-text-black-ter shadow-md has-background-white"
			outlined
		/>
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
			new Glider(document.querySelector(".glider"), {
				slidesToShow: 1,
				draggable: true,
				rewind: true,
				skipTrack: true,
				arrows: {
					prev: ".glider-prev",
					next: ".glider-next"
				},
				responsive: [
					{
						breakpoint: 425,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 5
						}
					}
				]
			});
		}
	};
</script>

<style>
	.grid {
		display: grid;
		gap: 8px;
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
