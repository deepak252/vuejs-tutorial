<template>
  <h2>{{1+2+3}}</h2>
  <h2>Add method - {{add(10,3)}}</h2>
  <h2>Multiply Method - {{multiply(10)}}</h2>
  <h2>Multiply Method - {{multiply(baseValue)}}</h2>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      baseMultiplier: 5,
      baseValue: 2
    }
  },
  methods: {
    add(num1, num2){
      return num1+num2;
    },
    multiply(num){
      return this.baseMultiplier*num;
    },
    // multiply: (num)=>{ // Don't use arrow functions
    //   return this.baseMultiplier*num; // Error:  Cannot read properties of undefined (reading 'baseMultiplier')
    // }
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
