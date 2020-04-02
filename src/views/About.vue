<template>
  <v-container class="about fill-height">
    <v-row align="center">
      <v-col :cols="12" :sm="8" :offset-sm="2" :md="6" :offset-md="3">
        <v-card raised>
          <v-card-title class="primary white--text">
            <v-btn icon to="/" left
              ><v-icon left color="white">mdi-arrow-left</v-icon></v-btn
            >
            Sobre...
          </v-card-title>
          <v-card-text class="pa-6">
            O movimento <strong>Compre do Vizinho</strong> é uma iniciativa da
            OFFICINA PROJETOS através do seu gestor Luiz Magno @luizmagnobr,
            para apoiar os pequenos negócios e incentivar o consumo de serviços
            e produtos oferecidos por empresas e autônomos presentes do bairro
            das grandes cidades.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
