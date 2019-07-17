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
import xyzHeader from '~/components/xyzHeader.vue'
import xyzFooter from '~/components/xyzFooter.vue'
export default {
  components: {
    xyzHeader,
    xyzFooter
  }
}
</script>
<style>
.content {
  padding: 20px;
}
</style>
