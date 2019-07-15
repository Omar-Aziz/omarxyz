<template>
  <div>
    <xyzYang />
  </div>
</template>

<script>
import xyzYang from '~/components/xyzYang.vue'
export default {
  components: {
    xyzYang
  },

  data: () => {
    return {
      name: 'Yang'
    }
  },

  head () {
    return {
      title: 'Yang',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription
        },
        { name: 'keywords', content: this.metaTag }
      ]
    }
  }
}

</script>
