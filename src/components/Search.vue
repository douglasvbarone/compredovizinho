<template>
  <v-text-field
    class="search-input"
    v-model="search"
    @input="$emit('input', search)"
    outlined
    rounded
    prepend-inner-icon="mdi-magnify"
    label="Buscar (Ex.: sushi, pedreiro, vila)"
    hint="Nome da empresa, produto, serviço, bairro, nome do dono..."
    @keyup.enter="blurIt"
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
  },
  methods: {
    blurIt(e) {
      e.target.blur()
      this.$vuetify.goTo(document.getElementById('companyList'))
    }
  }
}
</script>

<style scoped>
.search-input {
}
</style>
