<template>
  <v-container class="home">
    <v-row>
      <v-col>
        <search v-model="search" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div v-if="loading">Carregando...</div>
        <CompanyPanelsList :companies="fetchedCompanies" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Search from '../components/Search'
import { parseSheets } from '../tools/googleSheets'
import CompanyPanelsList from '../components/CompanyPanelsList'

export default {
  name: 'Home',
  components: { CompanyPanelsList, Search },
  data: () => ({
    search: '',
    fetchedCompanies: {},
    loading: true
  }),
  methods: {
    async fetchSheet() {
      this.loading = true
      try {
        const result = await fetch(process.env.VUE_APP_SHEET)

        this.fetchedCompanies = parseSheets(await result.json())
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
