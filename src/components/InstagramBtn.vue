<template>
  <v-btn
    class="instagram-bg"
    block

    :href="`https://www.instagram.com/${instagram}/`"
    target="_blank"
    v-if="instagram"
    text
    dark
  >
    <v-icon left>mdi-instagram</v-icon>
    {{ instagram }}
  </v-btn>
</template>
<script>
export default {
  name: 'InstagramBtn',
  props: {
    instagram: {
      type: String
    }
  }
}
</script>
