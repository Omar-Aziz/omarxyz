<template>
  <v-container grid-list-xl>
    <v-layout justify-center v-bind="binding">
      <xyzProject
        v-for="project in projects"
        :id="project.id"
        :key="project.id"
        :img="project.image"
        :src="project.source"
        :brief="project.summary"
        :check="project.inquire"
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
      projects: [ {
        id: 1,
        name: 'Tattos By Nikki',
        image: '/nikki.png',
        source: 'https://tattoosbynikki.com',
        summary: 'Nikki is dope',
        inquire: 'inquire'
      },
      {
        id: 2,
        name: 'Almost Paradise',
        image: '/paradise.png',
        source: 'https://almostparadise-ic.com',
        summary: 'Paradise is dope',
        inquire: 'inquire'
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
  }
}
</script>

<style scoped>
</style>
