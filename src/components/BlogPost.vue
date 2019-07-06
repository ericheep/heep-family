<template>
  <div id='blog-post'>
    <div id='blog-title'>{{ postTitle }}</div>
    <div id='blog-created-at'>{{ createdAt }}</div>
    <div id='blog-content' v-html=postDescription />
  </div>
</template>

<script>
export default {
  name: 'blog-post',
  props: {
    postTitle: {
      type: String,
      required: true,
    },
    postDescription: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
#blog-title {
  font-family: 'Lora', sans-serif;
  font-size: 42px;
  text-align: left;
  padding-top: 10px;
}
#blog-created-at {
  font-family: 'Lora', sans-serif;
  font-size: 14px;
  font-weight: 100;
  text-align: left;
  padding-bottom: 20px;
}
#blog-post {
  margin: 20px 50px;
  max-width: 700px;
  text-align: left;
}
</style>
