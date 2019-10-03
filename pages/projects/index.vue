<template>
  <v-container grid-list-xl>
    <v-layout justify-center row wrap>
      <xyzProject
        v-for="project in projects"
        :id="project.id"
        :key="project.id"
        :name="project.name"
        :img="project.image"
        :icon="project.icon"
        :src="project.source"
        :brief="project.summary"
      />
    </v-layout>
  </v-container>
</template>

<script>
import xyzProject from '~/components/xyzProject/xyzProject.vue'
export default {
  components: {
    xyzProject
  },
  data: () => {
    return {
      projects: [
        {
          id: 3,
          name: 'Temple Body Arts',
          image: '/temple.jpg',
          source: 'https://temple-body-arts.com',
          summary: `Almost Body Arts is a popular tattoo shop located downtown of Iowa City.
                    They have been around for many years and their work is well known in the community.
                    Feel free to look them up on social media too`

        },
        {
          id: 4,
          name: 'Dog Tinder',
          image: '/dogg.jpg',
          icon: true,
          source: 'https://dawg.netlify.com/',
          summary: 'Showing the power of Axios.js - this is a Tinder like app but for Dogs (Work in progress)'
        },
        {
          id: 2,
          name: 'Almost Paradise',
          image: '/paradise.jpg',
          source: 'https://almostparadise-ic.com',
          summary: `Almost Paradise is a smoke shop located in Iowa City that provides a variety of products at competeing prices.
                    Almost Paradise does deliveries too!`

        },
        {
          id: 1,
          name: 'Tattos By Nikki',
          image: '/nikki.jpg',
          source: 'https://tattoosbynikki.com',
          summary: 'Nikki is a tattoo artist based in Iowa City. She works at & owns Temple Body Arts located next to the Iowa City Public Library'

        },
        {
          id: 0,
          name: 'Hex Yeah!',
          image: '/hex.jpg',
          icon: true,
          source: '/projects/xyzHex',
          summary: 'Convert RGB(a) colors to hex colors (Work in progress)'

        }
      ]
    }
  },
  computed: {
    // binding () {
    //   const binding = {}
    //   if (this.$vuetify.breakpoint.smAndDown) { binding.column = true }
    //   if (this.$vuetify.breakpoint.mdAndUp) { binding.row = true }
    //   return binding
    // }
  },
  head () {
    return {
      title: 'Projects'
    }
  }
}
</script>
