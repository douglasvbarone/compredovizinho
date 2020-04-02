<template>
  <v-text-field
    class="search-input mx-3"
    v-model="search"
    @input="$emit('input', search)"
    outlined
    :rounded="!toolbar"
    :dense="toolbar"
    :hide-details="toolbar"
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
    },
    toolbar: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    blurIt(e) {
      e.target.blur()
      this.$vuetify.goTo(document.getElementById('companyList'))
    }
  },
  watch: {
    value(v) {
      if (v !== this.search) this.search = v
    }
  }
}
</script>

<style scoped>
.search-input {
}
</style>
