<template>
  <v-container grid-list-xl>
    <v-layout justify-center v-bind="binding">
      <v-flex xs7>
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="card">
            <v-img src="/nikki.png" contain />
            <v-card-actions>
              <v-btn flat class="trans" :href="buttons.links.nikki" target="_blank">
                {{ buttons.to }}
              </v-btn>
              <v-spacer />
              <v-btn icon @click="show1 = !show1">
                <v-icon>{{ show1 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-slide-y-transition>
              <v-card-text v-show="show1">
                {{ cards.nikki }}
                <v-btn block small class="btn" to="/mailer">
                  {{ buttons.default }}
                </v-btn>
              </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs7>
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="card">
            <v-img src="/paradise.png" contain />
            <v-card-actions>
              <v-btn
                flat
                class="trans"
                :href="buttons.links.paradise"
                target="_blank"
              >
                {{ buttons.to }}
              </v-btn>
              <v-spacer />
              <v-btn icon @click="show2 = !show2">
                <v-icon>{{ show2 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
              <v-card-text v-show="show2">
                {{ cards.paradise }}
                <v-btn block small class="btn" to="/mailer">
                  {{ buttons.default }}
                </v-btn>
              </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: {
      nikki:
        'Nikki is a tattoo artist based in Iowa City. She wroks at & owns Temple Body Arts located next to the Iowa City Public Library',
      paradise: 'Almost Paradise is a smoke shop located in Iowa City'
    },
    buttons: {
      default: 'Suggestions / comments',
      to: 'Explore',
      links: {
        nikki: 'https://tattoosbynikki.com',
        paradise: 'https://almostparadise-ic.com'
      }
    },
    show1: false,
    show2: false
  }),
  computed: {
    binding () {
      const binding = {}
      if (this.$vuetify.breakpoint.smAndDown) { binding.column = true }
      if (this.$vuetify.breakpoint.mdAndUp) { binding.row = true }
      return binding
    }
  }
}
</script>

<style>
html {
  font: TradeGothic-Regular;
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
