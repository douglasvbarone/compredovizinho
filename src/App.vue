<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
    <v-footer>
      <v-btn
        color="primary"
        href="https://forms.gle/62zt7bNm7Z7iXjaf6"
        target="_blank"
        :elevation="0"
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
