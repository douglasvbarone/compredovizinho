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
      <ThemeSwitcher />
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer color="secondary" dark app fixed>
      <v-btn
        href="https://forms.gle/62zt7bNm7Z7iXjaf6"
        target="_blank"
        :elevation="0"
        text
      >
        Quero meu negócio aqui!
      </v-btn>
      <v-btn text to="/sobre">Sobre</v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
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
