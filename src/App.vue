<template>
    <!-- <Card content="Card Content"/> -->
    <!-- <Card>Card Content</Card> -->
    <!-- <Card><h2>Card Content</h2></Card> -->
    <Card>
        <template v-slot:header>
            <h1>Card Heading</h1>
        </template>
        <template v-slot:default>
            <p>
                Card Content Card Content
            </p>
        </template>
        <template v-slot:footer>
            <button>View Details</button>
        </template>
    </Card>
</template>
<script>
import Card from'./components/Card.vue'

export default {
    name: 'App',
    components: {
        Card
    },
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
