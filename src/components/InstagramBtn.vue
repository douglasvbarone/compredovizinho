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

<style scoped>
.instagram-bg {
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}
</style>
