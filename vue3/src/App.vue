<template>
  <div>
    <TacoOrder msg="Welcome to Your Vue.js App"/>
    <Greet person="Sanjeev"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TacoOrder from './components/TacoOrderWatcher.vue'
import Greet from './components/Greet.vue'

export default {
  name: 'App',
  components: {
    TacoOrder,
    Greet
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
