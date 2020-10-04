<template>
  <div>
    <v-parallax
      id="parallax-image-about"
      dark
      height="820"
      src="../img/about-parallax-background.png"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="font-weight-thin parallax-title">About Coffee Passport</h1>
          <h4
            class="subheading about-sub-heading"
          >Make supporting local coffee shops in your city easy!</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container>
      <v-row id="second-section">
        <v-col xs="12" sm="12" md="6" lg="6">
          <v-img id="about-image" src="../img/default-img.jpg"></v-img>
        </v-col>
        <v-col id="about-writeup" xs="12" sm="12" md="6" lg="6">
          <blockquote class="blockquote">
            Coffee Passpord is an application that helps coffee lovers find the
            perfect coffee ship while in the city they're living in or traveling
            through. Each coffee shop has a rating, address and image to help with
            finding which one suits your coffee needs.
          </blockquote>
        </v-col>
      </v-row>
    </v-container>

    <div id="third-row">
      <v-container>
        <v-row>
          <v-col v-for="about in abouts" :key="`${about.title}`" xs="12" sm="12" md="6" lg="4">
            <v-card max-width="344" class="mx-auto">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline text-center">
                    {{
                    about.title
                    }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>
              <v-card-text>{{ about.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      abouts: [
        {
          title: "Discover New Shops",
          description:
            "When in a new city, discover high quality coffee shops that you may not find on other apps"
        },
        {
          title: "Rated Coffee Shop",
          description:
            "Find shops that are only highly rated by users who have been there"
        },
        {
          title: "Why Use Coffee-Passport",
          description:
            "Coffee-Passpord is a list of highly rated coffee shops where coffee shop owners have a passion for bringing you the finest coffee roasting for the perfect cup"
        }
      ]
    };
  }
};
</script>

<style scoped>
#parallax-image-about {
  width: 100%;
}

.parallax-title {
  font-size: 60px;
}

.about-sub-heading {
  font-size: 30px;
}

#second-section {
  margin: 15px 10% 15px 10%;
}

#about-image {
  max-height: 350px;
  max-width: 350px;
  border-radius: 50%;
  position: relative;
  display: block;
  margin: 5% auto 4% auto;
}

#about-writeup {
  padding: 12% 5% 10% 5%;
  text-align: center;
}

#third-row {
  background-color: #f1f3f8;
  height: 0 auto;
  padding-top: 10%;
  padding-bottom: 10%;
  width: 100% !important;
}
</style>
