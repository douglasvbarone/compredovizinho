<template>
  <v-container class="home main ">
    <v-row>
      <v-col :cols="12" :sm="'auto'">
        <LocationSelector :cities="cities" v-model="city" />
      </v-col>
      <v-col>
        <search v-model="search" />
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="12">
        <LoadingPanel v-if="loading" />
        <CompanyPanelsList v-if="!loading" :companies="filteredCompanies" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Search from '../components/Search'
import { parseSheets } from '../tools/googleSheets'
import CompanyPanelsList from '../components/CompanyPanelsList'
import LoadingPanel from '../components/LoadingPanel'
import LocationSelector from '../components/LocationSelector'

export default {
  name: 'Home',
  components: { LocationSelector, LoadingPanel, CompanyPanelsList, Search },
  data: () => ({
    search: '',
    city: '',
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
    filteredCompanies() {
      const keysToSearch = [
        'companyName',
        'description',
        'complement',
        'cpfcnpj',
        'district',
        'email',
        'instagram',
        'facebook',
        'owner',
        'segment',
        'street',
        'whatsapp'
      ]
      return this.fetchedCompanies.filter(
        company =>
          keysToSearch.some(key =>
            company[key]
              ? company[key].toLowerCase().includes(this.search.toLowerCase())
              : false
          )

        // company.companyName
        //   .toLowerCase()
        //   .includes(this.search.toLocaleLowerCase()) ||
        // company.description
        //   .toLowerCase()
        //   .includes(this.search.toLocaleLowerCase()) ||
        // company.companyName
        //   .toLowerCase()
        //   .includes(this.search.toLocaleLowerCase())
      )
    },
    cities() {
      return [
        ...new Set(
          this.fetchedCompanies.map(company => ({
            city: company.city,
            state: company.state
          }))
        )
      ]
    }
  },
  async created() {
    this.fetchSheet()
  }
}
</script>
