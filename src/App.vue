<template>
  <v-app>
    <v-app-bar color="#FFCC00" app elevate-on-scroll dark fixed>
      <v-toolbar-title>
        <v-img src="/img/logo.png" />
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <AboutDrawer v-model.lazy="drawer" />

    <v-content>
      <Home />
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
import Home from './views/Home'
export default {
  name: 'App',
  components: { Home, AboutDrawer },
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
