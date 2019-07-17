<template>
  <div class="mainDiv">
    <v-card id="err">
      <v-container text-xs-center>
        <v-layout align-center>
          <v-flex>
            <h1 v-if="error.statusCode === 404" class="txt">
              {{ result }}
            </h1>
            {{ notFound }}
            <span class="blink">_</span>
            <v-card-text id="txt">
              {{ msg }}
            </v-card-text>
            <!-- <h1 v-else>
            {{ otherError }}
            </h1>-->
            <NuxtLink class="home" to="/">
              Go Home
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
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
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
@import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
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
}
#err .txt {
  font-size: 4rem;
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
  /* animation-name: blink;
  animation-duration: 0.8s;
  animation-iteration-count: infinite; */
}
</style>
