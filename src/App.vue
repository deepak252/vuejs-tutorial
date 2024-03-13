<template>
  <h3>List of Strings</h3>
  <p v-for="name in names" :key="name">{{name}}</p>
  <h3>List of Strings with Index</h3>
  <p v-for="(name, index) in names" :key="name">{{index}} {{name}}</p>
  <h3>List of Objects</h3>
  <p v-for="fullName in fullNames" :key="fullName.first">{{fullName.first}} {{fullName.last}}</p>
  <h3>List of Lists</h3>
  <div v-for="actor in actors" :key="actor.name">
    <p>{{actor.name}}</p>
    <span v-for="movie in actor.movies" :key="movie">{{movie}}, </span>
  </div>
  <h3>Conditional List Rendering</h3>
  <template v-for="name in names" :key="name">
    <p v-if="['Bruce', 'Clark'].includes(name)">{{name}}</p>
  </template>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      names: ['Bruce', 'Clark', 'Diana'],
      fullNames: [
        {first: 'Bruce', last: 'wayne'},
        {first: 'Clark', last: 'Kent'},
        {first: 'Diana', last: 'Kent'},
      ],
      actors: [
        {
          name: 'Christian Bale',
          movies: ['Batman', 'The Prestige']
        },
        {
          name: 'Di Caprio',
          movies: ['Titanic', 'Inception']
        }
      ]
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
