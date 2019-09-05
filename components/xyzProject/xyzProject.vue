<template>
  <v-flex xs10 sm8 md6 xl4>
    <v-hover>
      <v-card id="card" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
        <v-img :src="img" contain />
        <v-card-actions>
          <v-btn flat :href="src" target="_blank">
            Explore
          </v-btn>
          <v-spacer />
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{ brief }}
            <v-btn block small class="btn" to="/mailer">
              {{ check }}
            </v-btn>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-hover>
  </v-flex>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    brief: {
      type: String,
      required: true
    },
    check: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
#card {
  background-color: rgba(0, 0, 0, 0.6)
}
.btn {
  background: -moz-linear-gradient(
    100deg,
    #e94057 0%,
    #8a2387 100%
  ); /* ff3.6+ */
  background: -webkit-gradient(
    linear,
    left bottom,
    right top,
    color-stop(0%, #e94057),
    color-stop(100%, #8a2387)
  ); /* safari4+,chrome */
  background: -webkit-linear-gradient(
    100deg,
    #e94057 0%,
    #8a2387 100%
  ); /* safari5.1+,chrome10+ */
  background: -o-linear-gradient(
    50deg,
    #e94057 0%,
    #8a2387 100%
  ); /* opera 11.10+ */
  background: -ms-linear-gradient(50deg, #e94057 0%, #8a2387 100%); /* ie10+ */
  background: linear-gradient(40deg, #e94057 0%, #8a2387 100%); /* w3c */
}

.theme--dark.v-sheet {
  background: inherit;
  box-shadow: 0.2rem 0 0.5rem 0.1rem rgba(0, 0, 10, 0.3);
  border-radius: 5px;
  position: relative;
  background: inherit;
  overflow: hidden;
}
.img {
  width: 100%;
}
</style>
