<template>
  <v-expansion-panels :popout="$vuetify.breakpoint.mdAndUp" readonly disabled>
    <v-expansion-panel>
      <v-expansion-panel-header>
        Carregando...
      </v-expansion-panel-header>
    </v-expansion-panel>
    <v-expansion-panel v-for="i in 4" :key="i">
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
