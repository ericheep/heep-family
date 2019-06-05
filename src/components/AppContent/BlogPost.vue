<template>
  <div class="blog-post">
    <h3>{{ postTitle }}</h3>
    <p v-html=postDescription />
  </div>
</template>

<script>
export default {
  name: 'blog-post',
  props: {
    postTitle: {
      type: String,
      required: String,
    },
    postDescription: {
      type: String,
      required: String,
    },
  },
}
</script>

<style scoped>
h1 {
  text-align: left;
}
h2 {
  text-align: center;
}
h3 {
  font-family: 'Roboto', sans-serif;
  text-align: left;
}
p {
  font-family: 'Roboto', sans-serif;
  text-align: left;
}
</style>

