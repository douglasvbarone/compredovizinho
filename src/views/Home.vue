<template>
  <div>
    <v-container class="home main mb-0 pb-0">
      <v-row>
        <v-col :cols="12" :sm="'auto'">
          <LocationSelector :cities="cities" v-model="city" />
        </v-col>
        <v-col>
          <search v-model="search" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <DataWarning dismissible />
        </v-col>
      </v-row>

      <v-row>
        <v-col :cols="12">
          <LoadingPanel v-if="loading" />
          <CompanyPanelsList v-if="!loading" :companies="filteredCompanies" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Search from '../components/Search'
import { parseSheets } from '../tools/googleSheets'
import CompanyPanelsList from '../components/CompanyPanelsList'
import LoadingPanel from '../components/LoadingPanel'
import LocationSelector from '../components/LocationSelector'
import DataWarning from './DataWarning'

export default {
  name: 'Home',
  components: {
    DataWarning,
    LocationSelector,
    LoadingPanel,
    CompanyPanelsList,
    Search
  },
  data: () => ({
    search: '',
    city: 'Carregando...',
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
            name: company.city,
            state: company.state
          })
        }
      }

      return [
        {
          name: 'Todas',
          state: 'Brasil'
        },
        ...cities.sort((a, b) =>
          a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
        )
      ]
    }
  },
  watch: {
    city() {
      localStorage.setItem('city', this.city)
    }
  },
  async mounted() {
    await this.fetchSheet()

    const savedCity = localStorage.getItem('city')

    this.city = this.cities.some(city => city.name === savedCity)
      ? savedCity
      : 'Todas'
  }
}
</script>
