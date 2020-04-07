<template>
  <v-alert color="info" dark :dismissible="dismissible" outlined>
    <h3 class="title">
      <v-icon color="info" left>mdi-comment-alert-outline </v-icon>
      ATENÇÃO!
    </h3>
    Todas as informações são fornecidas pelos próprios empresários/indivíduos.
    Não nos responsabilizamos por informações falsas ou errôneas.
  </v-alert>
</template>
<script>
export default {
  name: 'DataWarning',
  props: {
    dismissible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
