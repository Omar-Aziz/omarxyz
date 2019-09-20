<template>
  <v-layout id="mailPage" row wrap justify-center>
    <xyzMail
      v-for="item in mail"
      :id="item.id"
      :key="item.id"
      :class="item.styling"
    />
  </v-layout>
</template>

<script>
import xyzMail from '~/components/xyzMail/xyzMail.vue'
export default {
  components: {
    xyzMail
  },
  data: () => {
    return {
      mail: [
        {
          id: 0,
          styling: 'xs11 sm9 md6 lg4'
        }

      ]
    }
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
