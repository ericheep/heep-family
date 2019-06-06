<template>
  <div>
    <div v-for="blogPost in blogPosts" :key="blogPost.slug">
      <BlogPost
         v-bind:postTitle="blogPost.title"
         v-bind:postDescription="blogPost.htmlStringDescription"
         v-bind:createdAt="blogPost.createdAt"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BlogPost from './AppContent/BlogPost.vue'

export default {
  name: 'app-content',
  components: {
    BlogPost,
  },
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
}
</script>

<style scoped>
</style>
