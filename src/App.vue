<template>
  <div v-if="num===3">Num is three</div>
  <div v-if="num===0">Num is zero</div>
  <div v-else-if="num===2">Num is two</div>
  <div v-else>Num is not zero, two</div>

  <!-- <div v-if="display" >
    <p>Hii</p>
    <p>There</p>
  </div> -->
  <template v-if="display" >
    <p>Hii</p>
    <p>There</p>
  </template>

  <div v-if="display" >Using v-if</div>
  <div v-show="show" >Using v-show</div> <!-- uses display: none; -->

</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      num: 3,
      display: true,
      show: false,
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
