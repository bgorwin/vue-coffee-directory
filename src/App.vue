<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Coffee Directory</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        :to="link.url"
        text
        rounded
      >{{ link.label }}</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => {
    return {
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "About",
          url: "/about"
        }
      ]
    };
  }
};
</script>
