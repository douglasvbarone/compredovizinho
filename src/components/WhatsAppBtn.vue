<template>
  <v-btn
    class="whatsapp-btn-bg"
    block
    :icon="onlyIcon"
    big
    v-if="whatsapp"
    :elevation="0"
    dark
    :href="`https://wa.me/55${whatsapp}`"
    target="_blank"
    color="#25D366"
  >
    <v-icon :color="onlyIcon ? '#25D366' : null" :left="!onlyIcon"
      >mdi-whatsapp</v-icon
    >
    <span v-if="!onlyIcon">{{ formattedWhatsApp }}</span>
  </v-btn>
</template>

<script>
export default {
  name: 'WhatsAppBtn',
  props: {
    whatsapp: {
      type: String,
      default: ''
    },
    onlyIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formattedWhatsApp() {
      const cleaned = ('' + this.whatsapp).replace(/\D/g, '')

      const match = cleaned.match(
        cleaned.length === 11
          ? /^(\d{2})(\d{5})(\d{4})$/
          : /^(\d{2})(\d{4})(\d{4})$/
      )
      if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
      }
      return null
    }
  }
}
</script>

<style scoped>
.whatsapp-btn-bg {
  background: #27b039;
}
</style>
