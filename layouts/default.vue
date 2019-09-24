<template>
  <v-app
    dark
    :style="`background-color: ${app}`"
  >
    <v-content>
      <xyzHeader
        :id="id"
        :color1="theme1"
        :color2="theme2"
        :child-switch="parentSwitcher"
      />
      <nuxt />
      <xyzFooter
        :color1="theme1"
        :color2="theme2"
      />
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
  data: () => {
    return {
      id: 0,
      theme: '',
      app: '',
      theme1: '',
      theme2: ''
    }
  },
  mounted () {
    this.app = '#1A202C'
    this.theme1 = 'rgb(21, 26, 34)'
    this.theme2 = '#FDFDFD'
  },
  methods: {
    parentSwitcher () {
      const theme = this.app === '#1A202C'
        ? (this.app = '#FDFDFD',
        this.theme1 = 'rgb(204, 204, 204)',
        this.theme2 = '#1A202C')
        : (this.app = '#1A202C',
        this.theme1 = 'rgb(21, 26, 34)',
        this.theme2 = '#FDFDFD')
      return theme
    }
  }
}
</script>
<style lang="css" scoped>
html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  cursor: none;
  background-color: rgb(204, 204, 204);
}

.theme--dark.application {
  font-family: 'Exo', sans-serif;

}

.theme--dark.v-content {
  padding: 100px !important;
}

.v-list{
  background: transparent;
}

.theme--light.v-system-bar {
  background: linear-gradient(30deg, #f27121, #e94057, #8a2387);
  color: white;
}

.g-theme2 {
  background: linear-gradient(30deg, #f27121, #e94057, #8a2387);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.default-gradient-item {
  background: -webkit-linear-gradient(30deg, #8a3c0c, #e94057, #8a2387);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.trans {
  box-shadow: 0.1rem 0 0.3rem 0.1rem rgba(0, 0, 10, 0.6);
  border-radius: 2px;
  position: relative;
  background: inherit;
  overflow: hidden;
  height: 100%;
  margin: auto;
}

</style>
