<template>
  <h1>Vue3</h1>
</template>

<script>
const dinner = {
  meal: "Pizza",
};

function track(target, prop) {
  console.log(target, prop);
}

const handler = {
  get: function (target, prop) {
    track(target, prop);
    return Reflect.get(...arguments);
  },
  set: function (target, key, value) {
    console.log("in here");
    console.log("set", target, key, value);
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(dinner, handler);
console.log(proxy.meal);
proxy.meal = "Bomb";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
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
