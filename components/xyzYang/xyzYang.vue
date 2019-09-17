<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8 xl7>
        <v-card id="card">
          <v-img src="/yang_crowd.jpg" aspect-ratio="1.95" />
          <v-card-text primary-title class="text-md-center">
            <div>
              <h3 class="headline mb-0">
                {{ yang.main }}
              </h3>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn flat :to="yang.donate" target="_blank" class="trans">
              {{ yang.donateBtn }}
            </v-btn>
            <v-spacer />
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="show">
              <div style="padding: 0px 20px 0px 20px">
                {{ yang.quote }}
                <span class="font-italic">
                  <br>-Andrew Yang
                </span>
              </div>
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- followers count -->
    <v-layout text-xs-center>
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          xs8
          light
          :class="`elevation-${hover ? 12 : 2}`"
          class="mx-auto"
          :tile="tile"
          style="background: rgba(0,0,0,0.6);
                    box-shadow: 0.2rem 0 0.5rem 0.1rem rgba(0, 0, 10, 0.9);
                    border-radius: 5px;
                    position: relative;
                    overflow: hidden;"
        >
          <v-card-text class="font-weight-regular counter">
            {{ yang.twitterTitle }}
          </v-card-text>
          <div class="frameDiv">
            <iframe class="frame" :src="yang.count" />
          </div>
          <v-btn flat :href="yang.twitter" target="_blank" color="blue">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </v-card>
      </v-hover>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      name: 'yang',
      show: false,
      hover: true,
      tile: true,
      yang: {
        main: 'Andrew Yang',
        donateBtn: 'Contribute to Yang',
        twitter: 'https://twitter.com/AndrewYang',
        twitterTitle: 'LIVE TWITTER FOLLOWERS COUNT',
        donate:
          'https://secure.actblue.com/donate/ayorganicdebatejune19190627genall?utm_source=website&utm_medium=Organic&utm_campaign=DebateJune19&utm_term=&utm_content=190627ButtonTopNav&refcode=DebateJune19190627ButtonTopNav',
        count: 'https://livecounts.net/twitter/andrewyang',
        quote: `"I’m not a career politician—I’m an entrepreneur who understands the economy.
                It’s clear to me, and to many of the nation’s best job creators, that we need to make an
                unprecedented change, and we need to make it now. But the establishment isn’t willing to
                take the necessary bold steps. As president, my first priority will be to implement
                Universal Basic Income for every American adult over the age of 18: $1,000 a month,
                no strings attached, paid for by a new tax on the companies benefiting most from automation."
        `
      }
    }
  },
  computed: {
    binding () {
      const binding = {}
      if (this.$vuetify.breakpoint.smAndDown) {
        binding.xs = true
      }
      if (this.$vuetify.breakpoint.mdAndUp) {
        binding.xs8 = true
      }
      return binding
    }
  }
}
</script>

<style>
#card {
  background: rgba(0, 0, 0, 0.8)
}
.v-card__text {
  padding: 10px 0;
  width: 100%;
  justify-content: center;
  justify-items: center;
}

.wrapperDiv {
  width: 80%;
}

.counter {
  background: rgba(42, 8, 42, 0.1);
  opacity: 0.8;
  color: #fff;
  justify-content: center;
  justify-items: center;
}

.frameDiv {
  /* left: -10px; */
  width: 263px;
  height: 65px;
  overflow: hidden;
  position: relative;
}

.frame {
  position: absolute;
  top: -415px;
  left: -95px;
  width: 450px;
  height: 1100px;
}

.theme--dark.card {
  background: inherit;
  box-shadow: 0.2rem 0 0.5rem 0.1rem rgba(0, 0, 10, 0.9);
  border-radius: 5px;
  position: relative;
  background: inherit;
  overflow: hidden;
}
</style>
