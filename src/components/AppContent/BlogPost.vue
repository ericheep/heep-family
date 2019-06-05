<template>
  <div>
    <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'blog-post',
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.description"></div>
    </div>
  `
  data() {
    return {
      blogPost:
    }
  }
}
</script>

<style scoped>
</style>
