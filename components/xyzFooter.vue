<template>
  <v-bottom-nav app :active.sync="active" :height="height" :value="true">
    <div>
      <v-dialog v-model="dialog" transition="dialog-bottom-transition" :fullscreen="false">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">
            {{ text }}
            <v-icon class="default-gradient-item">
              {{ icon }}
            </v-icon>
          </v-btn>
        </template>

        <div class="default-gradient-bg">
          <xyzMail />
        </div>
      </v-dialog>
    </div>
  </v-bottom-nav>
</template>

<script>
import xyzMail from '~/components/xyzMail.vue'
export default {
  components: {
    xyzMail
  },
  data: () => {
    return {
      active: null,
      text: 'Anything I can improve / add? Send me your suggestions :)',
      height: '55%',
      dialog: false,
      icon: 'mail'
    }
  }
}
</script>

<style>
.v-dialog {
  box-shadow: 0.2rem 0 0.5rem 0.1rem rgba(0, 0, 10, 0.6);
  width: 400px;
}

.mailParent {
  background: rgba(20, 20, 25, 1);
}

.theme--dark.v-bottom-nav {
  background: rgba(0, 0, 1, 0.3);
  text-align: center;
}
</style>
