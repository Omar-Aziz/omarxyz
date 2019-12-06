<template>
  <v-flex align-center justify-center>
    <v-card id="info-card" flat>
      <v-divider />
      <h1>Omar Aziz</h1>
      <h2>software developer</h2>
      <h2>former infant</h2>
      <!-- <h3>click on the top left to explore this site</h3> -->
      <br>
      <v-divider />
      <v-flex justify="center">
        <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          width="400"
          :hide-overlay="false"
        >
          <template v-slot:activator="{ on }">
            <span id="connect">connect</span>
            <v-btn icon v-on="on">
              <v-icon style="">
                mail
              </v-icon>
            </v-btn>
          </template>
          <v-card>
            <xyzMail
              :id=" xyzMailProps.id"
              :styling="xyzMailProps.class"
            />
          </v-card>
        </v-dialog>
      </v-flex>
    </v-card>
  </v-flex>
</template>

<script>
import xyzMail from '~/components/xyzMail/xyzMail.vue'
export default {
  components: {
    xyzMail
  },
  data: () => {
    return {
      dialog: false,
      xyzMailProps: {
        id: 0,
        class: ''
      }
    }
  }

}
</script>

<style lang="css" scoped>
#info-card {
  background: transparent;
  margin: 80px 30px 0px 30px;
}

h1, h2, h3 { padding-left: 15px; color: #dfdfdf }
h1 {
  font-size: 90px;
  font-size:calc(100% + 8vw);
  font-weight: bolder;
  letter-spacing: 0.5rem;
  color: #c3b6a3
}

.v-item-group > * {
  flex: 0
}

#connect {
  font-size: 17.5px;
  font-weight: 700;
  color: #dfdfdf;
  padding: 0px 0px 0px 15px
}
</style>
