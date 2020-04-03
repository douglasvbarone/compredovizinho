<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
    <v-footer color="accent" dark app fixed>
      <v-btn
        href="https://forms.gle/62zt7bNm7Z7iXjaf6"
        target="_blank"
        :elevation="0"
        text
      >
        Quero meu negócio aqui!
      </v-btn>
      <v-spacer />
      <v-btn text to="/sobre">Sobre</v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>
