<template>
  <SqlRunner msg="Welcome to Your Vue.js App"/>
</template>

<script>
import {defineComponent} from "vue";

// import HelloWorld from './components/HelloWorld.vue'
import SqlRunner from './components/SqlRunner.vue'
// import SqlRunner from './components/Test.vue'

export default defineComponent({
  name: 'App',
  components: {
    SqlRunner
  }
})
</script>

<style>
#app {
  height: 100%;
  padding: 5px;
}
</style>
