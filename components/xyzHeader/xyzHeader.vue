<template>
  <div>
    <v-navigation-drawer
      id="navigation-drawer"
      v-model="drawer"
      :mini-variant="miniVariant"
      floating
      :width="width"
      app
    >
      <v-list>
        <v-list>
          <v-list-tile class="list-tile" avatar>
            <v-list-tile-avatar>
              <v-img :src="toolbar.img" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ toolbar.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action />
          </v-list-tile>
        </v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      id="toolbar"
      app
      flat
      fixed
      :clipped-left="false"
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <input id="switch" @click="childSwitch"><label for="switch">Toggle</label> -->
      <!--  <v-btn
        icon
        @click="childSwitch"
      >
        <v-icon>
          {{ toolbar.icon }}
        </v-icon>
      </v-btn> -->
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    childSwitch: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      clipped: true,
      permanent: false,
      temporary: false,
      drawer: false,
      miniVariant: true,
      width: '',
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: '/',
          tooltip: 'huh'
        },
        {
          title: 'Projects',
          icon: 'apps',
          to: '/projects'
        },
        {
          title: 'portfolio',
          icon: 'folder_open',
          to: '/profile/thesis'
        },
        {
          title: 'Yang',
          icon: 'bubble_chart',
          to: '/yang'
        }

        // {
        //   title: 'mailer',
        //   icon: 'mail',
        //   to: '/mailer'
        // }
      ],
      title: 'omaraziz',
      toolbar: {
        title: null,
        img: '/self.jpg',
        icon: 'lightbulb'
      }
    }
  }
}
</script>

<style lang="css" scoped>
/* input {
  height: 0;
  width: 0;
  display: hidden

}
label {
  cursor: pointer;
  text-indent: -9999px;
  width: 52px;
  height: 27px;
  background: #fff;
  float: right;
  border-radius: 100px;
  position: relative;
} */
.list-tile {
  /* background: linear-gradient(30deg, #1A202C, #1A202C, #1A202C); */
  padding: 5px 0px 5px 0px;
}

.theme--dark.v-list {
  padding-top: 0px;
}

</style>
