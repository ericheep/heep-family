<template>
  <div id='app-nav'>
    <div class='nav-item'>News</div>
    <div class='nav-item'>People</div>
    <div class='nav-item'>About</div>
  </div>
</template>

<script>
export default {
  name: 'app-nav',
  props: {
    msg: String
  },
}
</script>

<style scoped>
#app-nav {
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: space-evenly;
}
.nav-item {
  font-family: 'Leckerli One', cursive;
  font-size: 18px;
  align-self: center;
}
</style>
