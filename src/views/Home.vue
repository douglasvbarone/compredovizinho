<template>
  <v-container class="home main ">
    <v-app-bar fixed flat app color="primary" dark>
      <v-autocomplete
        :items="cities"
        prepend-inner-icon="mdi-map-marker"
        hide-details
        outlined
        dense
      />
    </v-app-bar>
    <v-row>
      <v-col :cols="12">
        <search v-model="search" />
      </v-col>
      <v-col :cols="12">
        <LoadingPanel v-if="loading" />
        <CompanyPanelsList v-if="!loading" :companies="fetchedCompanies" />
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
    fetchedCompanies: [],
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
  computed: {
    cities() {
      return [
        ...new Set(
          this.fetchedCompanies.map(
            company => `${company.city} (${company.state})`
          )
        )
      ]
    }
  },
  async created() {
    this.fetchSheet()
  }
}
</script>
