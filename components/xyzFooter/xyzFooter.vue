<template>
  <v-card>
    <v-bottom-nav
      id="bottom-nav"
      app
      :height="height"
      :value="true"
      :color="color1"
    >
      <div v-for="(item, i) in items" :key="i">
        <v-btn v-if="item.to.length === 0" @click.stop="dialog = true">
          <v-icon :color="color2">
            {{ item.icon }}
          </v-icon>
        </v-btn>
        <v-btn
          v-else
          :href="item.to"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon :color="color2">
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
        :id=" xyzMailProps.id"
        :color1="color1"
        :color2="color2"
        :styling="xyzMailProps.class"
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
  props: {
    color1: {
      type: String,
      required: true
    },
    color2: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      active: null,
      text: 'comment/share/hit the like btn/subscribe',
      height: '58%',
      dialog: false,
      items: [
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
      xyzMailProps: {
        id: 0,
        class: ''
      }

    }
  },
  mounted () {
    console.log('Here', Object.values(this.items)[0].to.length)
  }
}
</script>

<style lang="css" scoped>
#bottom-nav {
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
  width: 100%;
}

.v-item-group > * {
  flex: 0
}

#bottom-nav:hover {
  background-color: rgb(18, 22, 29);
}

</style>
