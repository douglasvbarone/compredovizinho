<template>
  <v-expansion-panel>
    <v-expansion-panel-header disable-icon-rotate>
      <template v-slot:default="{ open }">
        <v-row no-gutters>
          <span>{{ companyName }}</span>

          <span class="text--secondary" v-if="!open">, {{ description.substring(0, 20) }}</span>
          <v-spacer />
        </v-row>
      </template>
      <template v-slot:actions>
        <WhatsAppBtn only-icon :whatsapp="whatsapp" />
        <v-icon color="primary">mdi-plus</v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-container fluid>
        <v-row no-gutters>
          <v-col>
            {{ description }}
          </v-col>
        </v-row>
        <v-row>
          <v-col class="shrink">
            <InstagramBtn :instagram="instagram" />
          </v-col>
          <v-col class="shrink">
            <WhatsAppBtn :whatsapp="whatsapp" />
          </v-col>
        </v-row>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import WhatsAppBtn from './WhatsAppBtn'
import InstagramBtn from './InstagramBtn'

export default {
  components: { InstagramBtn, WhatsAppBtn },
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
    'updatedAt'
  ],
  name: 'CompanyPanel',
  data: () => ({})
}
</script>
