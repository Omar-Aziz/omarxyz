<template>
  <v-app
    dark
    :style="appColor"
  >
    <v-content>
      <xyzHeader
        :id="id"
        :toolbar-child="switchToolbar"
        :icon-child="switchIcon"
        :child-switch="parentSwitcher"
      />
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
  data: () => {
    return {
      id: 0,
      appColor: 'background-color: #1A202C',
      switchToolbar: 'rgb(21, 26, 34)',
      switchIcon: '#FDFDFD',
      result: ''
    }
  },
  methods: {
    parentSwitcher () {
      this.result = this.switchToolbar === 'rgb(21, 26, 34)' &&
      this.switchIcon === '#FDFDFD' &&
      this.appColor === 'background-color: #1A202C'
        ? (this.switchToolbar = '#FDFDFD', this.switchIcon = 'rgb(21, 26, 34)',
        this.appColor = 'background-color: #FDFDFD')
        : (this.switchToolbar = 'rgb(21, 26, 34)', this.switchIcon = '#FDFDFD',
        this.appColor = 'background-color: #1A202C')
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
  background-color: #1A202C;
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

.g-icon {
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
