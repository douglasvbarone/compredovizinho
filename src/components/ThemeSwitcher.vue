<template>
  <v-btn icon @click="$vuetify.theme.dark = !dark">
    <v-icon>mdi-theme-light-dark</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  computed: {
    dark() {
      return this.$vuetify.theme.dark
    }
  }
}
</script>

<style scoped></style>
