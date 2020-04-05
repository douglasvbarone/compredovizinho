<template>
  <div>
    <v-btn
      color="primary"
      block
      @click="dialog = true"
      text
      class="mt-3"
      v-if="cities[0]"
    >
      <v-icon left>mdi-map-marker</v-icon>{{ value }}
    </v-btn>
    <v-dialog
      v-model="dialog"
      :max-width="400"
      :fullscreen="$vuetify.breakpoint.smAndDown"
      scrollable
    >
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left dark>mdi-map-marker</v-icon>
          Escolha a cidade
        </v-card-title>
        <v-card-text>
          <v-list two-line>
            <v-list-item
              v-for="(city, index) in cities"
              :key="index"
              @click="selectCity(city.name)"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ city.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ city.state }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-icon left>mdi-comment-alert-outline</v-icon>
          <small class=""
            >Todas as cidades são informadas pelos próprios donos. Podem haver
            duplicações ou erros.</small
          >
          <v-spacer />
          <v-btn text @click="dialog = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'LocationSelector',
  props: {
    cities: {
      type: Array
    },
    value: {
      type: String,
      default: 'Todas'
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    selectCity(name) {
      this.$emit('input', name)
      this.dialog = false
    }
  }
}
</script>

<style scoped></style>
