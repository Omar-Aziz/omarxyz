<template>
  <v-container grid-list-xl>
    <v-layout justify-center row wrap>
      <xyzProject
        v-for="project in projects"
        :id="project.id"
        :key="project.id"
        :name="project.name"
        :img="project.image"
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
          id: 0,
          name: 'Hex Yeah!',
          image: '/hex.jpg',
          source: '/projects/xyzHex',
          summary: 'Convert RGB(a) colors to hex colors (example: rgba(0,0,0,0) to #000000'

        },
        {
          id: 1,
          name: 'Tattos By Nikki',
          image: '/nikki.jpg',
          source: 'https://tattoosbynikki.com',
          summary: 'Nikki is a tattoo artist based in Iowa City. She wroks at & owns Temple Body Arts located next to the Iowa City Public Library',

        },
        {
          id: 2,
          name: 'Almost Paradise',
          image: '/paradise.jpg',
          source: 'https://almostparadise-ic.com',
          summary: 'Almost Paradise is a smoke shop located in Iowa City',

        },
        {
          id: 3,
          name: 'Temple Body Arts',
          image: '/temple.jpg',
          source: 'https://temple-body-arts.com',
          summary: 'Almost Body Arts is a popular tattoo shop located downtown of Iowa City',

        }]
    }
  },
  computed: {
    binding () {
      const binding = {}
      if (this.$vuetify.breakpoint.smAndDown) { binding.column = true }
      if (this.$vuetify.breakpoint.mdAndUp) { binding.row = true }
      return binding
    }
  },
  mounted () {
    // console.log(this.projects[0].source.substr(0, 5))
  },
  head () {
    return {
      title: 'Projects'
    }
  }
}
</script>
