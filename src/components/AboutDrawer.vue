<template>
  <v-navigation-drawer right v-model="drawer" app :width="360" temporary>
    <v-card-title class="title primary white--text">
      Sobre...
    </v-card-title>
    <v-card-text class="mt-4">
      O movimento <strong>Compre do Vizinho</strong> é uma iniciativa da
      OFFICINA PROJETOS através do seu gestor Luiz Magno @luizmagnobr, para
      apoiar os pequenos negócios e incentivar o consumo de serviços e produtos
      oferecidos por empresas e autônomos presentes do bairro das grandes
      cidades.
    </v-card-text>
    <v-card-text>
      <strong>Versão</strong>: <span class="code">PWA200405 beta</span>
    </v-card-text>

    <v-card-text>
      <DataWarning />
    </v-card-text>
    <v-card-actions>
      <v-btn
        block
        @click="$emit('input', false)"
        x-large
        color="primary"
        :elevation="0"
      >
        OK
      </v-btn>
    </v-card-actions>

    <v-footer fixed>
      <v-container>
        <v-row align="center">
          <v-col class="shrink">
            <v-icon left>mdi-xml</v-icon>
          </v-col>
          <v-col>
            Aplicação desenvolvida gratuitamente por <br />
            <a href="https://github.com/douglasvbarone" target="_blank">
              Douglas Barone
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-navigation-drawer>
</template>

<script>
import DataWarning from '../views/DataWarning'
export default {
  name: 'AboutDrawer',
  components: { DataWarning },
  props: ['value'],
  data: () => ({ drawer: false }),
  watch: {
    value(v) {
      this.drawer = v
    },
    drawer() {
      if (!this.drawer) this.$emit('input', false)
    }
  }
}
</script>

<style scoped></style>
