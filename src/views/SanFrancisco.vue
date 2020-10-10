<template>
  <v-container>
    <v-app>
      <v-row class="justify-center mb-6">
        <h1 class="text-center">San Francisco, California</h1>
      </v-row>

      <v-row>
        <v-col
          class="d-flex justify-center"
          sm="12"
          md="6"
          lg="4"
          v-for="shop in shops"
          :key="`${shop.id}`"
        >
          <CoffeeCards :shop="shop" />
        </v-col>
      </v-row>
    </v-app>
  </v-container>
</template>

<script>
import CoffeeCards from "../components/CoffeeCards";

export default {
  components: {
    CoffeeCards
  },
  data() {
    return {
      shops: [
        {
          id: 0,
          company: "The Mill",
          address: "736 Divisadero St, San Francisco, CA 94117",
          rating: 10,
          city: "San Francisco"
        },
        {
          id: 1,
          company: "Wrecking Ball Coffee Roasters",
          address: "2271 Union St, San Francisco, CA 94123",
          rating: 9,
          city: "San Francisco"
        },
        {
          id: 2,
          company: "Blue Bottle",
          address: "2453 Fillmore St, San Francisco, CA 94115",
          rating: 8,
          city: "San Francisco"
        },
        {
          id: 3,
          company: "Four Barrel Coffee",
          address: "375 Valencia St, San Francisco, CA 94103",
          rating: 10,
          city: "San Francisco"
        },
        {
          id: 4,
          company: "Verve Coffee Roasters",
          address: "2101 Market St, San Francisco, CA 94114",
          rating: 9,
          city: "San Francisco"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
