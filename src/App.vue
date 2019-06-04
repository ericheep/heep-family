<template>
  <div id="app">
    <AppHeader id="app-header"/>
    <AppContent id="app-content"/>
    <AppSidebar id="app-sidebar"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'
import AppSidebar from './components/AppSidebar.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppContent,
    AppSidebar,
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: 'Leckerli One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app-header {
}
#app-content {

}
#app-sidebar {

}
</style>
