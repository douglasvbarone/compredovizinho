<template>
  <v-app>
    <v-app-bar
      color="primary"
      app
      elevate-on-scroll
      dark
      fixed
      shrink-on-scroll
      prominent
      scroll-threshold="20"
    >
      <v-toolbar-title>
        <v-icon left>mdi-home-group</v-icon>
        Compre do vizinho
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <AboutDrawer v-model.lazy="drawer" />

    <v-content>
      <router-view />
    </v-content>

    <v-footer color="secondary" dark app fixed :style="{ opacity: 0.9 }">
      <v-btn
        href="https://forms.gle/62zt7bNm7Z7iXjaf6"
        target="_blank"
        :elevation="0"
        text
      >
        Quero meu negócio aqui!
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import AboutDrawer from './components/AboutDrawer'
export default {
  name: 'App',
  components: { AboutDrawer },
  data: () => ({
    drawer: false
  }),
  mounted() {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.$vuetify.theme.dark = true
    }
  }
}
</script>
