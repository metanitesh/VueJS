<template>
  <div>
    <ul v-for="teacher in teachers" :key="teacher">
      <teacher :name="teacher.name" :subject="teacher.subject" @removeTeacher="removeTeacher">
        Teaches
      </teacher>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TacoOrder from './components/TacoOrderWatcher.vue'
// import Greet from './components/Greet.vue'
import Teacher from "./components/Teacher.vue";

export default {
  name: "App",
  components: {
    Teacher,
  },
  created(){
    console.log('created')
  },
  data() {
    return {
      teachers: [
        {
          name: "Nitesh",
          subject: "Js",
        },
        {
          name: "Santu",
          subject: "Python",
        },
      ],
    };
  },
  methods:{
    removeTeacher(name){
      console.log(name)
      this.teachers = this.teachers.filter(teacher => teacher.name !== name)
    }
  }
};
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
