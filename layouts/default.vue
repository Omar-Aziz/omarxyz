<template>
  <v-app dark>
    <v-navigation-drawer
      width="100px"
      :permanent="permanent" :drawer="drawer" :mini-variant="miniVariant" :clipped="clipped" color="#000" app>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app color="black">
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>


    <v-content>
      <v-container>
        <nuxt />
      </v-container>

    </v-content>

    <v-bottom-nav app :active.sync="bottomNav" :value="true"  color="black">
      <v-btn color="darkgrey" flat>
        <span>Connect</span>
        <v-icon>chat</v-icon>
      </v-btn>

      <v-btn color="teal">
        <span>Showcase</span>
        <v-icon>collections</v-icon>
      </v-btn>

      <v-btn color="teal">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "",
      clipped: false,
      permanent: false,
      drawer: true,
      items: [
        {
          icon: "apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "bubble_chart",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: true,

      title: "omaraziz"
    };
  }
};
</script>
