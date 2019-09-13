<template>
  <v-app dark>
    <v-content>
      <xyzHeader />
      <nuxt />
      <xyzFooter />
    </v-content>
  </v-app>
</template>

<script>
import xyzHeader from '~/components/xyzHeader/xyzHeader.vue'
import xyzFooter from '~/components/xyzFooter/xyzFooter.vue'
export default {
  components: {
    xyzHeader,
    xyzFooter
  }
}
</script>
<style>
.theme--dark.v-dialog .v-dialog {
  box-shadow: none !important;
  width: 10px;
}
</style>
