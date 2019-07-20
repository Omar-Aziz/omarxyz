<template>
  <div class="mainDiv">
    <v-card id="succ">
      <v-container text-xs-center>
        <v-layout align-center>
          <v-flex>
            <h1 id="h1">
              {{ check }}
            </h1>
            <p id="result">
              {{ result }}
            </p>
            <v-card-text id="txt">
              {{ msg }}
            </v-card-text>
            <NuxtLink class="home" to="/">
              {{ direct }}
            </NuxtLink>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    post: {
      type: Object,
      default: null
    }
  },

  data: () => {
    return {
      check: '✔︎',
      result: 'Success 💯',
      msg: 'Your email has been sent. I will get back to you whenever I feel like it',
      direct: 'Go Home',
      200: '200'
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
* {
  font-family: "Press Start 2P";
}
.mainDiv {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
#succ {
  padding: 0rem;
  text-align: center;
  background: transparent;
  text-shadow: 0 0 10px;
  font-size: 2rem;
}
#h1, #result {
  color: #54fe54;
}
#txt {
  font-size: 0.8rem
}
.home {
  text-decoration: none;
}
.home:hover {
  text-shadow: 0 0 100px;
  /* animation-name: blink;
  animation-duration: 0.8s;
  animation-iteration-count: infinite; */
}
</style>
