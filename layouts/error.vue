<template>
  <div class="mainDiv">
    <v-card id="err" flat>
      <v-container text-xs-center>
        <v-layout align-center>
          <v-flex>
            <h1 v-if="error.statusCode === 404" class="txt" v-text="result" />
            <h1 v-else v-text="otherError" />
            {{ notFound }}
            <span class="blink">_</span>
            <v-card-text id="txt" v-text="msg" />
            <NuxtLink class="home" to="/" v-text="`Go Home`" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Press+Start+2P'
        }
      ]
    }
  },
  data: () => {
    return {
      result: '404',
      notFound: 'Page Not Found',
      otherError: 'An error occurred',
      msg: "The page you're looking for doesn't exist"
    }
  }
}
</script>

<style scoped>
* {
  font-family: "Press Start 2P";
}
.mainDiv {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);

}
#err {
  padding: 2rem;
  background: transparent;
  color: #54fe54;
  text-shadow: 0 0 10px;
  font-size: 2rem;
  font-family: "Press Start 2P"
}
#err .txt {
  font-size: 4rem;
  font-family: "Press Start 2P"
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
#txt {
  font-size: 0.8rem;
  color: #fff
}
.blink {
  animation-name: blink;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
.home {
  text-decoration: none;
}
.home:hover {
  text-shadow: 0 0 100px;
}
</style>
