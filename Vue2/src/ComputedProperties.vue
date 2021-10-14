<template>
  <div id="counter" class="example">
    <h1>Counter: {{counter}}</h1>
    <button @click="increment">+</button>
    <h2>ComputedCounter : {{computedCounter}}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return{
      counter : 1,
    }
  },

  computed:{
    computedCounter(){
      return this.counter + 1
    }
  },

  methods: {
    increment(){
      this.counter++
    }
  },
}
</script>

<style lang="scss">
  body{
    background: #222;
  }
  .example{
    background: #ccc;
  }
</style>
