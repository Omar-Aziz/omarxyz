<template>
  <content>
    <v-navigation-drawer v-model="drawer" mini-variant app>
      <!-- :clipped-left="true" -->
      <!-- <v-toolbar app  class="test" :clipped-left="false">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-img :src="toolbar.img"></v-img>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ toolbar.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action></v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>-->

      <v-list>
        <v-list>
          <v-list-tile avatar class="test">
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

    <v-toolbar flat fixed app :clipped-left="false">
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>
  </content>
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
      toolbar: {
        title: 'Omar Aziz',
        img: '/self.jpg'
      },
      items: [
        {
          title: 'home',
          icon: 'apps',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'yang',
          to: '/yang'
        },
        {
          icon: 'mail',
          title: 'mailer',
          to: '/mailer'
        }
      ],
      title: 'omaraziz'
    }
  }
}
</script>

<style>
.theme--dark.v-navigation-drawer {
  background-color: rgba(0, 0, 0, 0.2);
}

.test {
  background: linear-gradient(30deg, #f5782b, #e94057, #8a2387);
  margin: 0;
}

.theme--dark.v-list {
  padding: 0px;
}



.theme--dark.v-navigation-drawer:hover {
  background: rgba(42, 8, 42, 0.2);
  border-radius: 1px;
}

.theme--dark.v-toolbar.test {
  background: linear-gradient(30deg, #f7ba48, #fa3d8c, #8a2381);
  border-radius: 1px;
}

.theme--dark.v-toolbar.test:hover {
  background: linear-gradient(60deg, #8a2381, #fa3d8c, #f7ba48);
  border-radius: 1px;
  position: relative;
  overflow: hidden;
  margin: auto;
}
</style>
