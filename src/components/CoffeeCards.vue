<template>
	<v-card max-width="300">
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
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn icon>
					<v-icon>mdi-heart</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon>mdi-share-variant</v-icon>
				</v-btn>
			</v-card-actions>
		</v-card-text>
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
