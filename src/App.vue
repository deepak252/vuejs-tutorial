<template>
    <!-- <Card content="Card Content"/> -->
    <Card>Card Content</Card>
    <Card><h2>Card Content</h2></Card>
</template>
<script>
import Card from'./components/Card.vue'

export default {
    name: 'App',
    components: {
        Card
    },
    data(){
        return {
            name: ''
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
