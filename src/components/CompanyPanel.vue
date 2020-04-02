<template>
  <v-expansion-panel @change="scrollTo">
    <v-expansion-panel-header>
      <template v-slot:default="{ open }">
        <v-row no-gutters>
          <v-col :cols="12">
            <span :class="{ title: open }" class="animate">{{
              open ? companyName : title
            }}</span>
          </v-col>
          <v-col :cols="12" v-if="view === 'normal'">
            <span class="text--secondary" v-if="!open">{{ summary }}</span>
          </v-col>
          <v-col class="mt-2" v-if="!open && view === 'normal'">
            <v-icon class="mr-1" color="#25D366" v-if="whatsapp"
              >mdi-whatsapp</v-icon
            >
            <v-icon class="mr-1" color="#C13584" v-if="instagram"
              >mdi-instagram</v-icon
            >
            <v-icon class="mr-1" color="#4267B2" v-if="facebook"
              >mdi-facebook</v-icon
            >
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-row>
        <v-col>
          {{ description }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="font-weight-medium">Proprietário: </span>{{ owner }}
          <span v-if="email"
            >(<a :href="`mailto:${email}}`">{{ email }}</a
            >)</span
          >
        </v-col>
      </v-row>
      <v-row v-if="segment">
        <v-col>
          <span class="font-weight-medium">Segmento:</span> {{ segment }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="font-weight-medium">Endereço:</span> {{ street }}, n.º
          {{ stNumber }}, {{ district }}.
          <span class="font-weight-medium">{{ city }}, {{ state }}</span
          >, CEP: {{ zipCode }}
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
    'updatedAt',
    'view'
  ],
  name: 'CompanyPanel',
  data: () => ({ open: false }),
  methods: {
    shrink(text) {
      const sizes = {
        xs: 30,
        sm: 55,
        md: 85,
        lg: 95,
        xl: 200
      }

      if (text.length <= sizes[this.$vuetify.breakpoint.name]) return text

      return text.substring(0, sizes[this.$vuetify.breakpoint.name]) + '...'
    },
    scrollTo() {
      this.$vuetify.goTo(this)
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
