<template>
  <div>Hello {{name}}</div> <!-- Method 1 (mustache syntax {{}}) -->
  <div v-text="age"></div> <!-- Method 2 (v-text directive: replaces the entire text content) -->
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      name: 'Deepak',
      age: 32
    }
  }
}
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
