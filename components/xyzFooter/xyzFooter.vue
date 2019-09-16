<template>
  <v-bottom-nav id="bottom-nav" app :active.sync="active" :height="height" :value="true">
    <div>
      <v-dialog v-model="dialog" class="dialog" transition="dialog-bottom-transition" style="box-shadow: 100px !important">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">
            {{ text }}
            <v-icon class="default-gradient-item">
              {{ icon }}
            </v-icon>
          </v-btn>
        </template>
        <xyzMail id="container" />
      </v-dialog>
    </div>
  </v-bottom-nav>
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
      icon: 'mail'
    }
  }
}
</script>

<style lang="css" scoped>
#bottom-nav {
  background: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  text-align: center;
}

#container {
  margin: 0 auto;
  box-shadow: 2rem 5rem 999rem rgba(0, 0, 0, 1);
}
</style>
