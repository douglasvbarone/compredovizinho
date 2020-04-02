<template>
  <div
    v-resize="calculateItemsPerPage"
    id="companyList"
    v-if="companies.length"
  >
    <v-row class="float-right">
      <v-col>
        <v-btn-toggle v-model="view" mandatory color="accent" dense>
          <v-btn value="normal">
            <v-icon>mdi-view-sequential</v-icon>
          </v-btn>
          <v-btn value="compact">
            <v-icon>mdi-view-headline</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <v-expansion-panels :inset="$vuetify.breakpoint.mdAndUp" hover>
      <CompanyPanel
        v-for="company in paginatedResults"
        :key="company.id"
        :view="view"
        :companyName="company.companyName"
        :whatsapp="company.whatsapp"
        :cpfcnpj="company.cpfcnpj"
        :email="company.email"
        :segment="company.segment"
        :street="company.street"
        :stNumber="company.stNumber"
        :complement="company.complement"
        :district="company.district"
        :city="company.city"
        :zipCode="company.zipCode"
        :updatedAt="company.updatedAt"
        :owner="company.owner"
        :instagram="company.instagram"
        :state="company.state"
        :facebook="company.facebook"
        :description="company.description"
      />
    </v-expansion-panels>
    <v-container>
      <v-row>
        <v-col
          :cols="12"
          :sm="8"
          class="mx-auto"
          v-if="companies.length >= itemsPerPage"
        >
          <v-pagination
            :length="pageLength"
            v-model="currentPage"
            :total-visible="8"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <v-container class="fill-height">
      <v-row align="center" class="text-center">
        <v-col>
          Nada encontrado... <v-icon right>mdi-emoticon-sad</v-icon>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CompanyPanel from './CompanyPanel'
export default {
  name: 'CompanyPanelsList',
  props: ['companies'],
  components: { CompanyPanel },
  data: () => ({
    currentPage: 1,
    itemsPerPage: 5,
    view: 'normal'
  }),
  computed: {
    paginatedResults() {
      const firstItem = (this.currentPage - 1) * this.itemsPerPage

      return this.companies.slice(firstItem, firstItem + this.itemsPerPage)
    },
    pageLength() {
      return Math.ceil(this.companies.length / this.itemsPerPage)
    }
  },
  methods: {
    calculateItemsPerPage() {
      const vh = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )

      const OTHER_AREAS = 500
      const ITEM_HEIGHT = this.view === 'normal' ? 94 : 48
      const MINIMUM = 5

      const calculated = vh ? Math.ceil((vh - OTHER_AREAS) / ITEM_HEIGHT) : 5

      this.itemsPerPage = calculated > MINIMUM ? calculated : MINIMUM

      this.currentPage = 1
    }
  },
  watch: {
    view() {
      this.calculateItemsPerPage()
    }
  },
  created() {
    this.calculateItemsPerPage()
  }
}
</script>

<style scoped></style>
