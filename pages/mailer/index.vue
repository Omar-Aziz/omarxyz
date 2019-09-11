<template>
  <v-layout id="mailPage" row wrap justify-center>
    <Mail />
  </v-layout>
</template>

<script>
import Mail from '~/components/xyzMail/xyzMail.vue'
export default {
  components: {
    Mail
  },
  head () {
    return {
      title: 'Email Page'
    }
  }
}
</script>
<style lang="css" scoped>
#mailPage {
  padding-top: 50px;
}
</style>
