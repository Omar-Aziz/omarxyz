<template>
  <content>
    <v-navigation-drawer
      :permanent="permanent"
      :temporary="temporary"
      v-model="drawer"
      :drawer="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      hide-overlay
      stateless
      floating
      fixed
      app
    >
      <!-- :clipped-left="true" -->
      <v-toolbar flat class="test" :clipped-left="true">
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
      </v-toolbar>

      <v-list>
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

    <v-toolbar flat fixed app :clipped-left="true">
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>
  </content>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      permanent: false,
      temporary: false,
      drawer: false,
      miniVariant: true,
      toolbar: {
        title: "Omar Aziz",
        img: "/self.jpg"
      },
      items: [
        {
          title: "home",
          icon: "apps",
          title: "omaraziz",
          to: "/"
        },
        {
          icon: "bubble_chart",
          title: "yang",
          to: "/yang"
        },
        {
          icon: "mail",
          title: "mailer",
          to: "/mailer"
        }
      ],
      title: "omaraziz"
    };
  }
};
</script>

<style>
.theme--dark.v-navigation-drawer {
  background-color: rgba(0, 0, 0, 0.2);
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
