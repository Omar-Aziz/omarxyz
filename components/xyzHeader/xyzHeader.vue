<template>
  <div>
    <v-navigation-drawer
      id="navigation-drawer"
      v-model="drawer"
      :mini-variant="miniVariant"
      floating
      :width="width"
      app
      :style="`background-color: ${color1}`"
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
            <v-icon :style="`color: ${color2}`">
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
      :style="color1"
      :clipped-left="false"
    >
      <v-toolbar-side-icon :style="`color: ${color2}`" @click="drawer = !drawer" />
      <v-toolbar-title :style="`color: ${color2}`" v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click="childSwitch"
      >
        <v-icon :color="color2">
          {{ toolbar.icon }}
        </v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    color1: {
      type: String,
      required: true
    },
    color2: {
      type: String,
      required: true
    },
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
.list-tile {
  /* background: linear-gradient(30deg, #1A202C, #1A202C, #1A202C); */
  padding: 5px 0px 5px 0px;
}

.theme--dark.v-list {
  padding-top: 0px;
}

</style>
