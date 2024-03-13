<template>
  <h2>Total Amount: {{totalAmount}}</h2>
  <h2>Total Amount: {{getTotalAmount()}}</h2>
  <button @click="prices.push(5)">Add Item</button>
  <input type="text" v-model="name"/>
  <span v-for="amount in highAmounts" :key="amount">' '{{amount}}</span>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      prices: [1,2,3,4,5,6,7,8,9,10],
      name:""
    }
  },
  methods: {
    getTotalAmount(){ 
      console.log('getTotalAmount');
      return this.prices.reduce((total, curr)=>(total+curr), 0)
    },
  },
  computed: {
    totalAmount(){
      console.log('totalAmount');
      return this.prices.reduce((total, curr)=>(total+curr), 0)
    },
    highAmounts(){
      return this.prices.filter(p=>p>5);
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
