<template>
  <v-card>
    <v-bottom-nav
      id="bottom-nav"
      app
      :height="height"
      :value="true"
    >
      <div v-for="(item, i) in icons" :key="i">
        <v-btn v-if="item.to.length === 0" @click.stop="dialog = true">
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </v-btn>
        <v-btn
          v-else
          :href="item.to"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </div>
    </v-bottom-nav>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      width="400"
      :hide-overlay="false"
    >
      <xyzMail
        v-for="item in mail"
        :id="item.id"
        :key="item.id"
        :styling="item.class"
      />
    </v-dialog>
  </v-card>
</template>

<script>
import xyzMail from '~/components/xyzMail/xyzMail.vue'
export default {
  components: {
    xyzMail
  },
  data: () => {
    return {
      active: null,
      text: 'comment/share/hit the like btn/subscribe',
      height: '58%',
      dialog: false,
      icons: [
        {
          title: 'Mail',
          icon: 'mail',
          to: ''
        },
        {
          title: 'GitHub',
          icon: 'mdi-github-circle',
          to: 'https://github.com/omar-aziz'
        }
      ],
      mail: [
        {
          id: 0,
          class: 'x'
        }
      ]
    }
  },
  mounted () {
    console.log('Here', Object.values(this.icons)[0].to.length)
  }
}
// ZBEDWZ
// SEPTSAVE19
</script>

<style lang="css" scoped>
#bottom-nav {
  background-color: rgb(21, 26, 34);
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  padding: 0px 400px 0px 400px
}

#bottom-nav:hover {
  background-color: rgb(18, 22, 29);
}

</style>
