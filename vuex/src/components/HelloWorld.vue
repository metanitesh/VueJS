<template>
  <div>
    <router-link to="/create-new-course">Create New Course</router-link>
    <ul v-for="course in this.$store.state.courses" :key="course">
      <li><span class="name">{{course.name}}</span> is taught by <span class="author">{{course.author}}</span> <button @click="deleteCourse(course.name)">X</button></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods:{
    deleteCourse(name: string){
      this.$store.commit('deleteCourse', name)
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.name, .author{
  text-decoration: underline;
}
</style>
