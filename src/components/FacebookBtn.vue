<template>
  <v-btn
    block
    :icon="onlyIcon"
    big
    v-if="facebook"
    :elevation="0"
    dark
    :href="facebook"
    target="_blank"
    color="#4267B2"
  >
    <v-icon :color="onlyIcon ? '#25D366' : null" :left="!onlyIcon"
      >mdi-facebook</v-icon
    >
    <span v-if="!onlyIcon">Facebook</span>
  </v-btn>
</template>

<script>
export default {
  name: 'FacebookBtn',
  props: {
    facebook: {
      type: String,
      default: ''
    },
    onlyIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {}
}
</script>

<style scoped></style>
