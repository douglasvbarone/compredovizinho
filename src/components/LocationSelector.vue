<template>
  <v-btn color="primary" block text class="mt-3" v-if="cities[0]"
    ><v-icon left>mdi-map-marker</v-icon>{{ cities[0].city }}</v-btn
  >
</template>

<script>
export default {
  name: 'LocationSelector',
  props: {
    cities: {
      type: Array
    }
  }
}
</script>

<style scoped></style>
