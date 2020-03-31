<template>
  <v-expansion-panel>
    <v-expansion-panel-header disable-icon-rotate>
      <template v-slot:default="{ open }">
        <v-row no-gutters>
          <v-col :cols="12">
            <span :class="{ title: open }" class="animate">{{
              open ? companyName : title
            }}</span>
          </v-col>
          <v-col :cols="12">
            <span class="text--secondary" v-if="!open">{{ summary }}</span>
          </v-col>
          <v-col class="mt-2" v-if="!open">
            <v-icon color="#25D366" v-if="whatsapp">mdi-whatsapp</v-icon>
            <v-icon color="#C13584" v-if="instagram">mdi-instagram</v-icon>
            <v-icon color="#4267B2" v-if="facebook">mdi-facebook</v-icon>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content class="text-justify">
      <v-row no-gutters>
        <v-col>
          {{ description }}
        </v-col>
      </v-row>

      <v-row>
        <v-col v-if="instagram">
          <InstagramBtn :instagram="instagram" />
        </v-col>
        <v-col v-if="facebook">
          <FacebookBtn :facebook="facebook" />
        </v-col>
        <v-col v-if="whatsapp">
          <WhatsAppBtn :whatsapp="whatsapp" />
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import WhatsAppBtn from './WhatsAppBtn'
import InstagramBtn from './InstagramBtn'
import FacebookBtn from './FacebookBtn'

export default {
  components: { FacebookBtn, InstagramBtn, WhatsAppBtn },
  props: [
    'companyName',
    'whatsapp',
    'cpfcnpj',
    'email',
    'segment',
    'street',
    'stNumber',
    'complement',
    'district',
    'city',
    'zipCode',
    'owner',
    'instagram',
    'state',
    'description',
    'facebook',
    'updatedAt'
  ],
  name: 'CompanyPanel',
  data: () => ({}),
  methods: {
    shrink(text) {
      const sizes = {
        xs: 30,
        sm: 55,
        md: 90,
        lg: 120,
        xl: 200
      }

      if (text.length <= sizes[this.$vuetify.breakpoint.name]) return text

      return text.substring(0, sizes[this.$vuetify.breakpoint.name]) + '...'
    }
  },
  computed: {
    summary() {
      return this.shrink(this.description)
    },
    title() {
      return this.shrink(this.companyName)
    }
  }
}
</script>
