<template>
  <v-container>
    <v-app>
      <v-row class="justify-center mb-6">
        <h1 class="text-center">Los Angeles, California</h1>
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
          company: "Intelligentsia",
          address: "3922 Sunset Blvd, Los Angeles, CA 90029",
          rating: 10,
          city: "Los Angeles",
          image: "intelligentsia1.jpg"
        },
        {
          id: 1,
          company: "La Colombe Coffee Roasters",
          address: "3900 Sunset Blvd, Los Angeles, CA 90029",
          rating: 10,
          city: "Los Angeles",
          image: "laColombe.jpg"
        },
        {
          id: 2,
          company: "Menotti's",
          address: "56 Windward Ave, Venice, CA 90291",
          rating: 10,
          city: "Los Angeles",
          image: "menottis.jpg"
        },
        {
          id: 3,
          company: "Bar Nine",
          address: "3515 Helms Ave, Culver City, CA 90232",
          rating: 10,
          city: "Los Angeles",
          image: "barNine.jpg"
        },
        {
          id: 4,
          company: "Stumptown",
          address: "806 S Santa Fe Ave, Los Angeles, CA 90021",
          rating: 8,
          city: "Los Angeles",
          image: "default-img.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
