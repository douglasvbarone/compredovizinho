<template>
  <v-navigation-drawer :value="value" app :width="360">
    <v-card-title class="title">
      <v-icon left>mdi-information-variant</v-icon> Sobre
    </v-card-title>
    <v-card-text class="">
      O movimento <strong>Compre do Vizinho</strong> é uma iniciativa da
      OFFICINA PROJETOS através do seu gestor Luiz Magno @luizmagnobr, para
      apoiar os pequenos negócios e incentivar o consumo de serviços e produtos
      oferecidos por empresas e autônomos presentes do bairro das grandes
      cidades.
    </v-card-text>
    <v-divider />
    <v-card-text>
      <v-container>
        <v-row align="center">
          <v-col class="shrink">
            <v-icon left>mdi-xml</v-icon>
          </v-col>
          <v-col>
            Aplicação Web desenvolvida gratuitamente por
            <a href="https://github.com/douglasvbarone" target="_blank">
              Douglas Barone
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-text>
      <DataWarning />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$emit('close')" block color="primary" :elevation="0">
        OK
      </v-btn>
    </v-card-actions>
  </v-navigation-drawer>
</template>

<script>
import DataWarning from '../views/DataWarning'
export default {
  name: 'AboutDrawer',
  components: { DataWarning },
  props: ['value']
}
</script>

<style scoped></style>
