<template>
  <v-text-field

    v-model="search"
    @input="$emit('input', search)"
    flat
    outlined
    rounded
    prepend-inner-icon="mdi-magnify"
    label="Buscar (Ex.: sushi, hambúrguer, pedreiro)"
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
