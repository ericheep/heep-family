<template>
  <div>
    <div v-for="blogPost in blogPosts" :key="blogPost.slug">
      <p> {{ blogPost.title }} </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'blog-posts',
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    },
  },
  methods: {
    ...mapActions([
      'getBlogPosts'
    ]),
  },
  mounted() {
    this.getBlogPosts()
  }
}
</script>

<style scoped>
</style>
