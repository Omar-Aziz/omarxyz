<template>
  <v-app
    :dark="darkTheme"
    :light="lightTheme"
  >
    <v-content>
      <xyzHeader :child-switch="parentSwitcher" />
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
      darkTheme: true,
      lightTheme: false
    }
  },
  methods: {
    parentSwitcher () {
      const switcher = this.darkTheme === true
        ? (this.darkTheme = false, this.lightTheme = true)
        : (this.darkTheme = true, this.lightTheme = false)
      return switcher
    }
  }
}
</script>
<style lang="css">
html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

:root {
  --primary-bg-color: #1A202C;
  --primary-color: rgba(0,0,0,0.6);
  --secondary-bg-color: #fdfdfd;
  --secondary-color: #343434;
  --gold-color: #c3b6a3;
}

.theme--dark.application {
  font-family: 'Exo', sans-serif;
  background: #141E30;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.theme--light.application {
  font-family: 'Exo', sans-serif;
  background: #ebebeb
}

.theme--dark.v-toolbar,
.theme--dark.v-bottom-nav,
.theme--dark.v-navigation-drawer,
.theme--dark.v-card {
  background-color: var(--primary-color);
}

.theme--dark.v-list { background-color: rgba(0, 0, 0, 0.0)}

.v-icon.material-icons.theme--dark,
.theme--dark.mdi-github-circle.theme--dark,
.v-item-group.v-bottom-nav.theme--dark
.v-btn .v-btn__content
i.v-icon.theme--dark,
.mdi-chart-line-stacked::before,
.mdi-book-open-page-variant::before,
.v-toolbar__title {
  color: var(--gold-color);
}

.v-icon.material-icons.themlight,
.theme--light.mdi-github-circle.theme--light,
.v-item-group.v-bottom-nav.theme--light
.v-btn .v-btn__content
i.v-icon.theme--light,
.v-toolbar__title {
  color: var();
}

.theme--dark.v-btn.btn {
  background-color: transparent;
  border: 0.5px solid #1A202C;
  box-shadow: 0 0 10px 0 #1A202C inset,
  0 0 20px 2px #1A202C;
  border-radius: 1px #1A202C;
-webkit-transition: all .15s ease-in-out;
  transition: all .15s ease-in-out;
  color: #ffffff;
}

.v-btn__content { color: #fff }

.theme--dark.v-btn.btn:hover {
  box-shadow: 0 0 10px 0 #1A202C inset,
   0 0 20px 2px #1A202C;
  border: 0.9px solid #1A202C;
  border-radius: 2px;
}

.theme--dark.v-content {
  padding: 100px !important;
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
