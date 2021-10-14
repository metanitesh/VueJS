<template>
<div>
  <div>
    <button @click="orderTaco">Order Taco</button>
  </div>
  <div v-show="tacoOrdered">Taco Order Recieved</div>
  <div v-show="tacoPreparing">Taco Preparing</div>
  <div v-show="tacoPrepared">Taco Prepared</div>
</div>
</template>

<script>


export default {
  data(){
    return {
      tacoOrdered: false,
      tacoPreparing: false,
      tacoPrepared: false
    }
  },

  methods: {
    orderTaco(){
      this.tacoOrdered = true
    }
  },

  watch:{
    tacoOrdered(){
      this.tacoOrdered = false
      this.tacoPrepared = false
      this.tacoPreparing = true
      setTimeout(() => {
        this.tacoPrepared = true
        this.tacoPreparing = false
        
      }, 2000)
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
