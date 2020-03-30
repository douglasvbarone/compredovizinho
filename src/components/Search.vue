<template>
  <v-text-field
    class="ma-2"
    v-model="search"
    @input="$emit('input', search)"
    flat
    outlined
    prepend-inner-icon="search"
    label="Buscar"
    hint="Nome, serviço ou bairro"
  />
</template>
<script>
export default {
  name: 'search',
  data: () => ({
    search: ''
  }),
  props: {
    value: {
      type: String
    }
  }
}
</script>
