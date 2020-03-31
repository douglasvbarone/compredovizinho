<template>
  <v-btn
    :href="`https://www.instagram.com/${instagram}/`"
    target="_blank"
    v-if="instagram"
    text
    color="#833AB4"
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
