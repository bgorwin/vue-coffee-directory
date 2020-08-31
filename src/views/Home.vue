<template>
	<v-container>
		<v-row id="home-heading">
			<v-col class="border" cols="12"> </v-col>
		</v-row>

		<v-row class="d-flex flex-wrap" wrap>
			<v-col class="border favorites-section" cols="12" sm="12" md="8" lg="8">
			</v-col>
			<v-col class="border choose-city" cols="12" md="4" lg="4"> </v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	components: {}
};
</script>

<style scoped>
.border {
	border: 1px solid red;
}

#home-heading {
	height: 300px;
}

.choose-city {
	height: 300px;
}

.favorites-section {
	height: 300px;
}
</style>
