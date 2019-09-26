<template>
  <v-layout id="mailPage" row wrap justify-center>
    <xyzMail
      :id="id"
      :class="styling"
    />
  </v-layout>
</template>

<script>
import xyzMail from '~/components/xyzMail/xyzMail.vue'
export default {
  layout: 'default',
  components: {
    xyzMail
  },
  data: () => {
    return {
      id: 0,
      styling: 'xs11 sm9 md6 lg4'
    }
  },
  head () {
    return {
      title: 'Email Page'
    }
  },
  mounted () {console.log()},
  methods: {
    t () {
      console.log(this.layout)
    }
  }
}
</script>
<style lang="css" scoped>
#mailPage {
  padding-top: 50px;
}
</style>
