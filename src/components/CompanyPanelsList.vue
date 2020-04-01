<template>
  <div>
    <v-expansion-panels :popout="$vuetify.breakpoint.mdAndUp" hover>
      <CompanyPanel
        v-for="(company, index) in paginatedResults"
        :key="index"
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
        <v-col :cols="12" :sm="8" class="mx-auto">
          <v-pagination :length="pageLength" v-model="currentPage" />
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
    itemsPerPage: 5
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
  created() {
    const vh = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )

    const otherAreas = 320

    console.log(vh)

    if (vh) this.itemsPerPage = Math.ceil((vh - otherAreas) / 94)
  }
}
</script>

<style scoped></style>
