<template>
  <v-container class="home">
    <v-row>
      <v-col>
        <search v-model="search" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <LoadingPanel v-if="loading" />
        <CompanyPanelsList v-if="!loading" :companies="fetchedCompanies" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-pagination />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Search from '../components/Search'
import { parseSheets } from '../tools/googleSheets'
import CompanyPanelsList from '../components/CompanyPanelsList'
import LoadingPanel from '../components/LoadingPanel'

export default {
  name: 'Home',
  components: { LoadingPanel, CompanyPanelsList, Search },
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
        alert(
          'Ocorreu um erro ao carregar a lista de empresas. Tente novamente mais tarde.'
        )
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
