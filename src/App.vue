<template>
  <h2>{{name}}</h2>
  <button v-on:click="changeName">Change Name</button>
  <h2>{{count}}</h2>
  <div>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
    <br>
    <button @click="increment(2, $event)">+2</button>
    <button @click="decrement(2, $event)">-2</button>
    <br>
    <button v-on:click="changeName($event), increment(2, $event)">+2 AND Change Name</button>
    <br>
    <button @click="reset">RESET</button>
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
    changeName(e){
      console.log(e);
      this.name = 'Deepak Chaurasiya'
    },
    add(num1, num2){
      return num1+num2;
    },
    reset(){
      this.count = 0;
    },
    increment(num, event){
      this.count+=num;
      console.log(event);
    },
    decrement(num, event){
      this.count-=num;
      console.log(event);
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
