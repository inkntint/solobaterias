<template>
	<div>
		<app-header />
		<section class="section">
			<div class="container">
				<app-categories />
				<slot name="body" />
			</div>
		</section>
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