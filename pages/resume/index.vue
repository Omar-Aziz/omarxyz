<template>
  <v-container id="top-pad" grid-list-xl text-xs-center>
    <v-layout justify-center row wrap>
      <v-flex xs12 sm10 md10 lg10 xl7>
        <v-card id="title" text-xs-center>
          <h2 v-text="topic" />
        </v-card>
      </v-flex>
      <v-flex xs12 sm10 md10 lg10 xl7>
        <v-card id="thesis" raised>
          <v-parallax src="/fn.jpg" :aspect-ratio="aspectRatio" />

          <v-btn flat @click="show = !show">
            <h2 v-text="`Abstract`" />
            <v-icon x-large>
              {{ show ? icons.down : icons.up }}
            </v-icon>
          </v-btn>

          <v-slide-y-transition>
            <v-card-text v-show="show">
              <p id="abstract" v-text="abstract" />
              <v-btn
                id="read"
                target="_blank"
                href="https://ir.uiowa.edu/honors_theses/252/"
              >
                Read Full Text
                <v-icon right size="25">
                  {{ icons.page }}
                </v-icon>
              </v-btn>
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
      <v-flex xs12 sm10 md10 lg10 xl7>
        <v-sheet
          id="stats-sheet"
          height="100%"
          width="100%"
        >
          <v-card id="stats-card">
            <v-btn
              id="stats"
              flat
              block
              href="https://plu.mx/plum/a/?bepress_url_id=https%3A%2F%2Fir.uiowa.edu%2Fhonors_theses%2F252"
              data-hide-print="true"
              class="plumx-summary plum-bigben-theme"
              data-site="plum"
              data-hide-when-empty="true"
              data-hide-socialmedia="true"
            >
              Check Paper Metrics
              <v-icon right size="22" color="black">
                mdi-chart-line-stacked
              </v-icon>
            </v-btn>
          </v-card>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- <iframe
      src="/thesis.pdf"
      width="80%"
      height="80%"
    >
      may not show
    </iframe> -->

  <!-- <a href="https://plu.mx/plum/a/?repo_url=https%3A%2F%2Fir.uiowa.edu%2Fhonors_theses%2F252" data-hide-print="true" class="plumx-summary plum-bigben-theme" data-site="plum" data-hide-socialmedia="true">Nietzsche’s Critique of Morality and Revaluation of Values</a>
    <object width="88%" height="910px" data="/thesis.pdf">
      Data loading . . .
    </object> -->
</template>

<script>
export default {
  head () {
    return {
      title: 'Thesis',
      script: [
        { src: 'https://cdn.plu.mx/widget-summary.js' }
      ]
    }
  },
  data: () => {
    return {
      show: false,
      ratio: {
        xs: {
          'aspect-ratio': 1
        }

      },
      topic: `Nietzsche's Critique of Morality and Revaluation of Values`,
      abstract: `One of Nietzsche’s main projects was to critique morality and to invite
                a revaluation of our values. Neither secular nor religious interpretations
                of Nietzsche’s critique of morality do it justice. Each support their own
                interpretation by appealing to certain aspects of his writings. The former
                appeal to Nietzsche’s rejection of Christianity and Christian morality; while
                the latter appeal to Nietzsche’s anti-democratic and anti-egalitarian remarks.
                In actuality, Nietzsche was neither of the two: he argued that Western secular
                moralities are a modern manifestation of Christian morality, and that Christian
                morality is a manifestation of what he comes to call “Slave Morality.” On this
                account, this thesis is a humble attempt to bring forth a philosophical
                interpretation of Nietzsche’s critique and historical analysis of morality, and
                how we can incorporate his critique and revaluation of values into our lives so
                we can live a better life. I hope that my contribution will be a meaningful
                addition to the ongoing philosophical discussion on Nietzsche. I also hope that
                this thesis will be accessible to those who have not yet introduced themselves
                to the work of Nietzsche.`,
      image: ``,
      icons: {
        down: 'keyboard_arrow_down',
        up: 'keyboard_arrow_up',
        page: 'mdi-book-open-page-variant'
      }
    }
  },
  computed: {
    aspectRatio () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '0.8'
        case 'sm': return '1.3'
        case 'md': return '1.4'
        case 'lg': return '2.1'
        case 'xl': return '2.4'
      }
      return false
    }
  }
  // mounted () {
  //   console.log(this.$vuetify.breakpoint)
  // }
}
</script>

<style lang="css" scoped>
#top-pad {
  padding-top: 10px
}

#title {
    padding: 0px 8px 0px 8px;
    background: rgba(0,0,0,1)
}

#stats-sheet {
  background: transparent
}

#stats-card {
  background: rgb(236, 236, 236);
  width: 320px;
  padding: 0px 10px 0px 10px;
  margin: 0 auto
}

#stats {
  background: rgba(236, 236, 236, 236);
  color: black;
  font-family: ubuntu;
  min-width: 320px;
  font-size: 16px;
}

#stats-btn {
  width: 100%;
}
#thesis {
  background: rgba(0,0,0,0.9);
  height: 100%;
}

#abstract {
  text-align: justify;
  padding: 0px 8px 0px 8px;
  font-size: 16px;
  text-justify: inter-word
}

#read {
  font-size: 17px;
  text-decoration: none;
  box-shadow: 0.3rem 0 0.8rem 1rem (0,0,0,0.4);
}

@media only screen and (max-width: 1200px) {
  #stats-sheet {
    background: transparent
  }
  #stats-card {
     margin: 0 auto;
     width: 100%
  }
}

@media only screen and (max-width: 500px) {
  #abstract {
    font-size: 1.05rem;
    text-align: justify;
    line-height: 17px;
    text-justify: inter-word
  }
}

#pdf {
  padding-top: 0px;
  margin: 0 auto;
  display: flex;
  justify-content: center
}

</style>
