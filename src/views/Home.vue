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
    <v-alert color="info" dark dismissible outlined>
      <h3 class="title">
        <v-icon color="info" left>mdi-comment-alert-outline</v-icon>ATENÇÃO!
      </h3>
      Todas as informações são fornecidas pelos próprios empresários/indivíduos.
      Não nos responsabilizamos por informações falsas ou errôneas.
    </v-alert>
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
  components: {
    LocationSelector,
    LoadingPanel,
    CompanyPanelsList,
    Search
  },
  data: () => ({
    search: '',
    city: 'Campo Grande',
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
          (this.city === 'Todas' || company.city === this.city) &&
          keysToSearch.some(key =>
            company[key]
              ? company[key].toLowerCase().includes(this.search.toLowerCase())
              : false
          )
      )
    },
    cities() {
      const cities = []
      const map = new Map()
      for (const company of this.fetchedCompanies) {
        if (!map.has(company.city)) {
          map.set(company.city, true)
          cities.push({
            city: company.city,
            state: company.state
          })
        }
      }

      return [
        { city: 'Todas', state: 'Brasil' },
        ...cities.sort(function(a, b) {
          const cityA = a.city.toUpperCase() // ignore upper and lowercase
          const cityB = b.city.toUpperCase() // ignore upper and lowercase
          if (cityA < cityB) {
            return -1
          }
          if (cityA > cityB) {
            return 1
          }

          // names must be equal
          return 0
        })
      ]
    }
  },
  async created() {
    this.fetchSheet()
  }
}
</script>
