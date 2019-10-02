<template>
  <v-flex xs12 sm8 md6 xl4>
    <v-hover>
      <v-card id="card" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
        <v-img id="img" :src="img" />
        <v-card-actions>
          <v-btn v-if="src[0] === '/'" flat nuxt :to="src">
            {{ name }}
          </v-btn>
          <v-btn
            v-else
            flat
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
#card:hover {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1px;
}

#img {
  height: 305px;
}
</style>
