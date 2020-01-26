<template>
	<app-shell>
		<q-semi-precious-stones />
		<q-precious-stones />
	</app-shell>
</template>

<script>
	import QSemiPreciousStones from "../components/QSemiPreciousStones";
	import QPreciousStones from "../components/QPreciousStones";
	export default {
		components: {
			QSemiPreciousStones,
			QPreciousStones
		}
	};
</script>
