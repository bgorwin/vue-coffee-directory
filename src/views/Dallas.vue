<template>
  <v-container>
    <v-app>
      <v-row class="justify-center mb-6">
        <h1 class="text-center">Dallas, Texas</h1>
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
          company: "Houndstooth Coffee",
          address: "1900 N Henderson Ave, Dallas, TX 75206",
          rating: 9,
          city: "Dallas",
          image: "houndstooth.jpg"
        },
        {
          id: 1,
          company: "Weekend Coffee",
          address: "1511 Commerce St, Dallas, TX 75201",
          rating: 8,
          city: "Dallas",
          image: "default-img-3.jpg"
        },
        {
          id: 2,
          company: "Merit",
          address: "4228 Oak Lawn Ave, Dallas, TX 75219",
          rating: 10,
          city: "Dallas",
          image: "merit1.jpg"
        },
        {
          id: 3,
          company: "Merit",
          address: "2639 Main St, Dallas, TX 75226",
          rating: 10,
          city: "Dallas",
          image: "merit2.jpg"
        },
        {
          id: 4,
          company: "La La Land Kind Cafe",
          address: "5626 Bell Ave, Dallas, TX 75206",
          rating: 9,
          city: "Dallas",
          image: "default-img.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
