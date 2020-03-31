<template>
  <v-expansion-panels :popout="$vuetify.breakpoint.mdAndUp" hover>
    <CompanyPanel
      v-for="(company, index) in companies"
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
      :description="company.description"
    />
  </v-expansion-panels>
</template>

<script>
import CompanyPanel from './CompanyPanel'
export default {
  name: 'CompanyPanelsList',
  props: ['companies'],
  components: { CompanyPanel }
}
</script>

<style scoped></style>
