<template>
  <div id="app">
    <h1>Hello {{name}} {{ msg }}</h1>
    <ul v-bind:key="item" v-for="item in data">
      <li>{{item}}</li>
    </ul>
    <input type="text" aria-label="user data" v-model="userData"/>
    <p>{{userData}}</p>
    <p v-show="flag">Show</p>
    <p v-if="flag">Show</p>
    <p :class="[flag? 'red': '']">Hello world red</p>
    <ul v-for="num in 5" :key="num">
      <li>{{num}}</li>
    </ul>
    <button @click="flag = flag ? false : true">toggle</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:'Nitesh',
      data: ['run', 'walk', 'sleep'],
      userData: 'Hello world',
      flag: true
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.red{
  color:red;
}

h1, h2 {
  font-weight: normal;
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
