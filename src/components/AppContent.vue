<template>
  <div>
    <h1></h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app-content',
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
