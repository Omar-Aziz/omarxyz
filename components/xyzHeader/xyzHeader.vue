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
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar id="toolbar" flat fixed app :clipped-left="false">
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      permanent: false,
      temporary: false,
      drawer: false,
      miniVariant: true,
      width: '',
      toolbar: {
        title: null,
        img: '/self.jpg'
      },
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
          to: 'resume'
        },
        {
          title: 'Yang',
          icon: 'bubble_chart',
          to: '/yang'
        },

        {
          title: 'mailer',
          icon: 'mail',
          to: '/mailer'
        }
      ],
      title: 'omaraziz'
    }
  }
}
</script>

<style lang="css" scoped>
#navigation-drawer {
  background-color: rgba(0, 0, 0, 0.5);
}

#navigation-drawer:hover {
  background: rgba(8, 1, 5, 0.788);
  border-radius: 1px;
}

.list-tile {
  background: linear-gradient(30deg, #f5792bd0, #e94057, #8a2323);
  padding: 5px 0px 5px 0px;
}

.theme--dark.v-list {
  padding-top: 0px;
}

</style>
