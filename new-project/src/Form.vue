<template>
 <div id="form">
   <form @submit.prevent="submitForm">
     <label for="name"></label><br>
     <input id="name" type="text" required v-model="name">
     <button type="submit">Submit</button>
   </form>
   <div>{{response}}
  </div>
 </div>

</template>

<script>
export default {

  name: 'Form',
  data(){
    return {
      name: '',
      response: ''
    }
  },
  methods: {
    submitForm(e){
      this.response = `Response from server, ${this.name}`
    }
  }}
</script>




