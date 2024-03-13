<template>
  <h2>{{name}}</h2>
  <button v-on:click="name='Deepak Chaurasiya'">Update Name</button>
  <h2>{{count}}</h2>
  <div>
    <button v-on:click="count++">+</button>
    <button v-on:click="count--">-</button>
    <br>
    <button v-on:click="increment(2)">+2</button>
    <button v-on:click="decrement(2)">-2</button>
    <br>
    <button v-on:click="reset">RESET</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      name: 'Deepak',
      count: 0
    }
  },
  methods: {
    add(num1, num2){
      return num1+num2;
    },
    reset(){
      this.count = 0;
    },
    increment(num){
      this.count+=num;
    },
    decrement(num){
      this.count-=num;
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
