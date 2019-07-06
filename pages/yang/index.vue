<template>
  <div>
    <AndrewYang />
  </div>
</template>

<script>
import AndrewYang from "~/components/AndrewYang.vue";
export default {
  components: {
    AndrewYang
  },

  data: () => {
    return {
      name: 'Yang',
    }
  },

  head() {
    return {
      title: "Yang",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.metaDescription
        },
        { name: "keywords", content: this.metaTag }
      ]
    };
  }
};

</script>