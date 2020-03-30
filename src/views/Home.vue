<template>
  <div class="home">
    <search v-model="search" />

    <div v-if="loading">Carregando...</div>
    <div v-else>{{ entries }}</div>
  </div>
</template>

<script>
import Search from '../components/Search'
import { parseSheets } from '../tools/googleSheets'

export default {
  name: 'Home',
  components: { Search },
  data: () => ({
    search: '',
    entries: {},
    loading: true
  }),
  methods: {
    async fetchSheet() {
      this.loading = true
      try {
        const result = await fetch(process.env.VUE_APP_SHEET)

        this.entries = parseSheets(await result.json())
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    }
  },
  async created() {
    this.fetchSheet()
  }
}
</script>
