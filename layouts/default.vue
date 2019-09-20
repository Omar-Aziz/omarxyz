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
  },
  methods: {}
}
</script>
<style lang="css" scoped>
html{
  height: 100%;
}
body{
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    cursor: none;
}
#canvas{
    background-color: #2c343f;
    width: 100%;
    height: 100%;
}
</style>
