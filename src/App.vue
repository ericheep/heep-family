<template>
  <div id="app">
    <AppHeader id="app-header"/>
    <router-view></router-view>
    <AppFooter id="app-footer"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
#app {
  display: grid;
  /* grid-template-columns: repeat(12, 1fr); */
  /* grid-template-columns: [first] 90px [second] auto [end] 90px;*/
  /*grid-template-rows: 100px 700px 100px;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f4f2ef;
}
#app-header {
  grid-column: span 12;
  top: 0;
  position: sticky;
  opacity: 0.9;
  background-color: #f4f2ef;
}
#app-sidebar {
  grid-column: span 3;
}
#app-content {
  grid-column: span 9;
}
#app-footer {
  grid-column: span 12;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  margin: 0;
  padding-bottom: 15px;
}
h1 {
  font-size: 30px;
}
h2 {
  font-size: 26px;
}
h3 {
  font-size: 22px;
}
p {
  font-family: 'Lora', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  margin: 0px;
  padding-bottom: 20px;
}
</style>
