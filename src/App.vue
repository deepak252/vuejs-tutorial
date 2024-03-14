<template>
  <h2>Volume Tracker</h2>
  <h4>{{volume}}</h4>
  <button @click="volume--">-</button>
  <button @click="volume++">+</button>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      volume: 0
    }
  },
  methods: {},
  computed: {},
  watch: {
    volume(newValue, oldValue){
      console.log(newValue, oldValue);
      if(newValue>oldValue && newValue==7){
        alert("High volume alert")
      }
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
