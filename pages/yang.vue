<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout align-center justify-center row fill-height wrap>
      <!-- card with image -->
      <v-flex xs12 offset-sm0>
        <v-card>
          <v-img src="/yang_crowd.png" aspect-ratio="1.95"></v-img>

          <v-card-text primary-title class="text-md-center">
            <div>
              <h3 class="headline mb-0">Andrew Yang</h3>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn flat :href="url.donate" target="_blank" color="red">Contribute to Yang</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="show">
              <div>
                {{ card_text }}
                <span class="font-italic">
                  <br />-Andrew Yang
                </span>
              </div>
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>

      <!-- followers count -->
      <div>
        <v-hover>
          <v-card
            xs8
            light
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
            :tile="tile"
          >
            <v-card-text class="font-weight-regular">LIVE TWITTER FOLLOWERS COUNT</v-card-text>
            <div class="frameDiv">
              <iframe class="frame" src="https://livecounts.net/twitter/andrewyang"></iframe>
            </div>
            <v-btn flat :href="url.twitter" target="_blank" color="blue">Twitter</v-btn>
          </v-card>
        </v-hover>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
// import { setTimeout } from "timers";
export default {
  name: "yang",
  data() {
    return {
      show: false,
      hover: true,
      tile: true,
      url: {
        twitter: "https://twitter.com/AndrewYang",
        donate:
          "https://secure.actblue.com/donate/ayorganicdebatejune19190627genall?utm_source=website&utm_medium=Organic&utm_campaign=DebateJune19&utm_term=&utm_content=190627ButtonTopNav&refcode=DebateJune19190627ButtonTopNav"
      },
      card_text: `"I’m not a career politician—I’m an entrepreneur who understands the economy.
      It’s clear to me, and to many of the nation’s best job creators, that we need to make an
      unprecedented change, and we need to make it now. But the establishment isn’t willing to
      take the necessary bold steps. As president, my first priority will be to implement
      Universal Basic Income for every American adult over the age of 18: $1,000 a month,
      no strings attached, paid for by a new tax on the companies benefiting most from automation."
        `
    };
  }
};

// var delayInMilliseconds = 500;

// setTimeout(function() {
//   var iframe = document.getElementsByTagName("iframe")[0];
//   iframe.style.background = "#fff";
//   iframe.contentWindow.document.body.style.backgroundColor = "#fff";
// }, delayInMilliseconds);
</script>

<style scoped>
.frameDiv {
  /* left: -10px; */
  width: 343px;
  height: 110px;
  overflow: hidden;
  position: relative;
}

.frame {
  position: absolute;
  top: -400px;
  left: -105px;
  width: 550px;
  height: 1100px;
}
</style>