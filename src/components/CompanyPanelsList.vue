<template>
  <div v-scroll="infiniteScroll" id="companyList" v-if="companies.length">
    <v-row class="float-right">
      <v-col>
        <v-btn-toggle v-model="view" mandatory color="primary" dense>
          <v-btn value="normal">
            <v-icon>mdi-view-sequential</v-icon>
          </v-btn>
          <v-btn value="compact">
            <v-icon>mdi-view-headline</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <v-expansion-panels :inset="$vuetify.breakpoint.smAndUp" hover>
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
    view: 'normal',
    qntItems: 10
  }),
  computed: {
    paginatedResults() {
      return this.companies.slice(0, this.qntItems)
    }
  },
  methods: {
    infiniteScroll() {
      function bottomVisible() {
        const scrollY = window.scrollY
        const visible = document.documentElement.clientHeight + 100
        const pageHeight = document.documentElement.scrollHeight
        const bottomOfPage = visible + scrollY >= pageHeight
        return bottomOfPage || pageHeight < visible
      }

      if (bottomVisible() && this.companies.length > this.qntItems)
        this.qntItems = this.qntItems + 5
    },
    calculateInitialItems() {
      const vh = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )

      const OTHER_AREAS = 500
      const ITEM_HEIGHT = this.view === 'normal' ? 94 : 48
      const MINIMUM = 5

      const calculated = vh ? Math.ceil((vh - OTHER_AREAS) / ITEM_HEIGHT) : 5

      this.qntItems = calculated > MINIMUM ? calculated : MINIMUM
    }
  },
  watch: {
    companies() {
      this.qntItems = 5
    },
    view() {
      this.infiniteScroll()
    }
  },
  created() {
    this.calculateInitialItems()
  }
}
</script>

<style scoped></style>
