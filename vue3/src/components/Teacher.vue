<template lang="html">
  <div>
    <li>
      <span>{{name}} </span> <slot></slot>  <span>{{subject}}</span> <button @click="$emit('removeTeacher', name)">X</button>
      
    </li>
  </div>
</template>
<script>
export default {
  props: ['name', 'subject'],
  data(){
    return {
      suffix: (Math.random()*100).toFixed()
    }
  }
}
</script>
<style lang="scss">
  
</style>