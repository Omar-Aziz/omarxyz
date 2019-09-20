<template>
  <div>
    <v-bottom-nav
      id="bottom-nav"
      app
      :active.sync="active"
      :height="height"
      :value="true"
    >
      <v-btn @click.stop="dialog = true">
        {{ text }}
        <v-icon color="pink">
          {{ icon }}
        </v-icon>
      </v-btn>
    </v-bottom-nav>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="400" :hide-overlay="false" :scrollable="false">
      <xyzMail
        v-for="item in mail"
        :id="item.id"
        :key="item.id"
        :styling="item.class"
      />
    </v-dialog>
  </div>
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
      icon: 'mail',
      mail: [
        {
          id: 0,
          class: 'x'
        }
      ]
    }
  }
}
// ZBEDWZ
// SEPTSAVE19
</script>

<style lang="css" scoped>
#bottom-nav {
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  text-align: center;
}

#container {
  margin: 0 auto;
  width: 50px;
  box-shadow: 2rem 5rem 999rem rgba(0, 0, 0, 1);
}
</style>
