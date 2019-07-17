<template>
  <div class="mainDiv">
    <v-card class="topCard">
      <v-container text-xs-center>
        <v-layout align-start>
          <v-flex>
            <v-card class="mx-auto childCard" color="#1b95e0" dark max-width="420">
              <v-card-title>
                <v-icon
                  large
                  left
                >
                  {{ icons.twitter }}
                </v-icon>
                <span class="title font-weight-bold">
                  {{ tag }}</span>
              </v-card-title>

              <v-card-text class="headline font-weight-slim">
                {{ tweet }}
              </v-card-text>

              <v-card-actions>
                <v-list-tile class="grow">
                  <v-list-tile-avatar color="grey darken-3">
                    <v-img left class="elevation-6" :src="img" />
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ name }}</v-list-tile-title>
                  </v-list-tile-content>

                  <v-layout align-center justify-end>
                    <v-btn icon flat depressed class="heart" to="/fun">
                      <v-icon>{{ icons.heart }}</v-icon>
                    </v-btn>
                    <span class="subheading mr-2">{{ stats[0] }}</span>
                    <span class="mr-1">·</span>
                    <v-btn icon flat depressed class="share">
                      <v-icon>{{ icons.share }}</v-icon>
                    </v-btn>
                    <span class="subheading">{{ stats[1] }}</span>
                  </v-layout>
                </v-list-tile>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    img: '/self.jpg',
    name: 'Omar',
    tag: 'Twitter',
    tweet:
      "This is the worst website I've ever seen. It's dangerously slow and embarraseingly unoptimized. Geeez.",
    icons: {
      twitter: 'mdi-twitter',
      heart: 'mdi-heart',
      share: 'mdi-share-variant'
    },
    stats: [345, 67]
  })
}
</script>

<style scoped>
.mainDiv {
  height: 100%;
  width: 100%;
}

/* display: flex to center errything */
.topCard {
  background-image: url("/flowers.jpg");
  background-size: cover;
  opacity: 0.95;
  box-shadow: 0.2rem 1rem 1rem 0.5rem rgba(0, 0, 0, 0.3);
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  border-radius: 1px;
}

.topCard:hover {
  box-shadow: 1rem 0.2rem 0.8rem 0.7rem rgba(0, 0, 0, 0.5);
  opacity: 1;
}

.childCard {
  box-shadow: 0 0.8rem 0.8rem 0.7rem rgba(0, 0, 10, 0.3);
}

.childCard:hover {
  box-shadow: 0 0.8rem 0.8rem 0.7rem rgba(0, 0, 10, 0.1);
  opacity: 1;
}

.v-divider {
  background: rgba(42, 8, 42, 0.9);
  opacity: 1;
}
.heart::before {
  color: transparent;
}

.heart:hover {
  color: #e0245e;
}

.share::before {
  color: transparent;
}

.share:hover {
  color: #1bc768;
}
</style>
