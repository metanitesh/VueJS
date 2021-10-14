<template>
  <div>
    <h1>{{counter}}</h1>
    <button @click="counter++">Increment</button>
  </div>
</template>

<script>


export default {
  data(){
    return {
      counter: 0
    }
  },

  watch:{
    counter(newValue, oldValue){
      console.log('changed counter', oldValue, newValue)
    }
  }


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
