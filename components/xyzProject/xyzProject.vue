<template>
  <v-flex xs12 sm8 md6 xl4>
    <v-hover>
      <v-card id="card" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
        <v-img id="img" :src="img" />
        <v-card-actions>
          <v-btn v-if="src[0] === '/'" class="btn" flat nuxt :to="src">
            {{ name }}
          </v-btn>
          <v-btn
            v-else
            class="btn"
            :href="src"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ name }}
          </v-btn>
          <v-icon v-if="icon == true" style="margin-left: 10px">
            build
          </v-icon>

          <v-spacer />
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{ brief }}
            <v-btn block small class="btn" to="/mailer">
              Comments?
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
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: Boolean,
      default: false
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
    }
  },

  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="css" scoped>
#card {
  background-color: rgba(0, 0, 0, 0.7);
}

#card:hover {
  background: rgba(8, 1, 5, 1);
  border-radius: 1px;
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

#img {
  height: 305px;
}
</style>
