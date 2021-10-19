<template>
  <div>
    <router-link to="/">Back</router-link>
    <form @submit.prevent="createNewCourse">
      <div>
        <label for="name"></label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="author"></label>
        <input type="text" id="author" v-model= "author" required />
      </div>
      <button >submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: '',
      author: ''
    }
  },
  methods: {
    createNewCourse() {
      console.log("hello")
      this.$store.commit('addCourse', {
        name: this.name,
        author: this.author
      })

      console.log(this.$store.state)
      this.name = ''
      this.author = ''
    },
  },
};
</script>
<style lang="scss" scoped>
  input, button{
    width: 300px;
    height: 10px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border-color: #eee;
  }
  button  {
    padding: 20px 10px;
    // width: 40px;
  }
</style>
