<template>
  <v-layout>
    <Project />
  </v-layout>
</template>

<script>
import Project from '~/components/xyzProject/xyzProject.vue'
export default {
  components: {
    Project
  },

  data: () => {
    return {
      card: [
        {
          id: 1,
          name: 'resume'
        }
      ]
    }
  }
}
</script>

<style>

</style>
