<template>
  <v-container>
    <v-app>
      <v-row class="justify-center mb-6">
        <h1 class="text-center">Austin, Texas</h1>
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
      <v-row>
        <v-col class="d-flex justify-center" cols="12">
          <HomeButton />
        </v-col>
      </v-row>
    </v-app>
  </v-container>
</template>

<script>
import CoffeeCards from "../components/CoffeeCards";
import shopData from "../data/shops.json";
import HomeButton from "../components/HomeButton";

export default {
  components: {
    CoffeeCards,
    HomeButton
  },
  data() {
    return {
      shops: shopData
    };
  }
};
</script>

<style scoped>
</style>
