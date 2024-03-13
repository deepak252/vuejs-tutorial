<template>
  <h2>Total Amount: {{totalAmount}}</h2>
  <h2>Total Amount: {{getTotalAmount()}}</h2>
  <button @click="prices.push(5)">Add Item</button>
  <input type="text" v-model="name"/>
  <span v-for="amount in highAmounts" :key="amount">' '{{amount}}</span>
  <p>Full Name: {{fullName}}</p>
  <button @click="changeFullName">Change Full Name</button>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      firstName: 'Clark',
      lastName: 'Kent',
      prices: [1,2,3,4,5,6,7,8,9,10],
      name:""
    }
  },
  methods: {
    getTotalAmount(){ 
      console.log('getTotalAmount');
      return this.prices.reduce((total, curr)=>(total+curr), 0)
    },
    changeFullName(){
      this.fullName = 'Deepak Chaurasiya' // fullName will get passed to the set() function
    }
  },
  computed: {
    // fullName(){ //computed property "fullName" is readonly.
    //   return `${this.firstName} ${this.lastName}`
    // },
    fullName: {
      get(){
        return `${this.firstName} ${this.lastName}`
      },
      set(value){
        this.firstName = value.split(' ')[0];
        this.lastName = value.split(' ')[1];
      }
    },
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
