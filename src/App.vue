<template>
  <v-app>
    <v-app-bar color="#FFCC00" app elevate-on-scroll fixed>
      <v-container style="max-width: 960px" class="mx-auto" fluid>
        <v-row align-content="center">
          <v-col class="shrink pa-0">
            <v-img :max-height="52" src="/img/logo.png" contain />
          </v-col>
          <v-col>
            <span class="title ml-4" v-if="$vuetify.breakpoint.mdAndUp">
              Anuncie o que você quer Vender e Procure o que deseja Comprar
            </span>
          </v-col>
        </v-row>
      </v-container>
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
