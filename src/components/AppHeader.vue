<template>
  <div id='app-header'>
    <router-link id='logo' to="/">HEEP</router-link>
    <AppNav/>
  </div>
</template>

<script>
import AppNav from './AppHeader/AppNav.vue'

export default {
  components: {
    AppNav,
  },
  name: 'app-header',
  props: {
    msg: String
  },
}
</script>

<style scoped>
#app-header {
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  text-align: center;
  border-bottom: 1px solid black;
}
a {
  color: #42b983;
}
h1 {
}
#logo {
  font-family: 'Leckerli One', cursive;
  font-weight: bold;
  margin: 10px;
  align-self: center;
  font-size: 30px;
}
</style>
