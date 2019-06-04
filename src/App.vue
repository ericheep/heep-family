<template>
  <div id="app">
    <AppHeader id="app-header"/>
    <AppSidebar id="app-sidebar"/>
    <AppContent id="app-content"/>
    <AppFooter id="app-footer"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppContent,
    AppSidebar,
    AppFooter,
  }
}
</script>

<style>
#app {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px 650px 100px;
  font-family: 'Leckerli One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app-header {
  grid-column: span 12;
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
</style>
