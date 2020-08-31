<template>
	<v-card class="mx-auto" max-width="400">
		<v-img
			class="white--text align-end"
			height="200px"
			src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
		>
			<v-card-title>{{ shop.company }}</v-card-title>
		</v-img>

		<v-card-subtitle class="pb-0">{{ shop.company }}</v-card-subtitle>

		<v-card-text class="text--primary">
			<div>Address: {{ shop.address }}</div>
			<div>Rating: {{ shop.rating }}</div>
		</v-card-text>

		<!-- <v-card-actions>
			<v-btn color="orange" text>
				Share
			</v-btn>

			<v-btn color="orange" text>
				Explore
			</v-btn>
		</v-card-actions> -->
	</v-card>
</template>

<script>
export default {
	name: 'CoffeeCards',
	props: {
		shop: {
			type: Object,
			required: true
		}
	}
};
</script>
