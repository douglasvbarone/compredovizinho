<template>
  <v-expansion-panels :popout="$vuetify.breakpoint.mdAndUp" readonly>
    <v-expansion-panel v-for="i in 5" :key="i">
      <v-expansion-panel-header>
        <v-skeleton-loader type="list-item-two-line" />
      </v-expansion-panel-header>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'LoadingPanel'
}
</script>

<style scoped></style>
