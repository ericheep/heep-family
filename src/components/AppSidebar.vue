<template>
  <div>
    <h1>app sidebar</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app-sidebar',
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
