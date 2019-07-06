<template>
  <v-app light>
    <v-navigation-drawer
      width="100px"
      :permanent="permanent"
      v-model="drawer"
      :drawer="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      color="#000"
      app
    >
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

    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>

    <v-content>
      <nuxt />
    </v-content>

    <v-bottom-nav app :active.sync="bottomNav" :height="bottomNav.height" :value="true">
      <v-btn color="black" flat :href="`mailto:${email}`">
        <span>Anything I can improve / add?</span>
        <v-icon>chat</v-icon>
      </v-btn>
      <!--
      <v-btn color="teal">
        <span>Showcase</span>
        <v-icon>collections</v-icon>
      </v-btn>

      <v-btn color="teal">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>-->
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: "mailto:obinsalamah@protonmail.com",
      bottomNav: "",
      height: 46,
      clipped: true,
      permanent: false,
      drawer: false,
      items: [
        {
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
          to: "/"
        }
      ],
      miniVariant: true,

      title: "omaraziz"
    };
  }
};
</script>
