<template>
  <v-card>
    <v-bottom-nav
      id="bottom-nav"
      app
      :height="height"
      :value="true"
    >
      <div v-for="(item, i) in items" :key="i">
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
        :id=" xyzMailProps.id"
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

</style>
