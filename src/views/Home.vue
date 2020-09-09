<template>
	<v-container>
		<v-row id="home-heading">
			<v-col cols="12" justify="center">
				<div>
					<v-img
						class="overlay"
						src="../img/home-page-background.jpg"
						max-height="270"
					>
						<h1 class="austin-heading font-weight-thin text-center">
							Coffee Passport
						</h1>
					</v-img>
				</div>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12" max-height="200px">
				<div>
					<h1 class="text-center">Choose A City</h1>
					<div class="d-flex flex-wrap justify-center">
						<v-btn
							class="mb-4 ma-4"
							v-for="city in cities"
							:key="city"
							outlined
							color="teal"
							dark
							>{{ city }}</v-btn
						>
					</div>
				</div>
			</v-col>
		</v-row>

		<v-row class="d-flex flex-direction-row">
			<v-col class="d-flex flex-row flex-wrap justify-center order-2" cols="12">
				<div class="mr-4 mb-6" v-for="shop in shops" :key="`${shop.company}`">
					<CoffeeCards :shop="shop" />
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import CoffeeCards from '../components/CoffeeCards';
import shopData from '../data/shops.json';

export default {
	components: {
		CoffeeCards
	},
	data() {
		return {
			shops: shopData,
			cities: ['Austin', 'Dallas', 'San Francisco', 'Los Angesles']
		};
	}
};
</script>

<style scoped>
.border {
	border: 1px solid red;
}

.austin-heading {
	margin-top: 100px;
	color: white;
	font-size: 60px;
}
</style>
