<template>
  <div>
    <h2>Volume Tracker</h2>
    <h4>{{volume}}</h4>
    <button @click="volume--">-</button>
    <button @click="volume++">+</button>
  </div>
  <div>
    <input type="text" v-model="movie"/>
    <input type="text" v-model="movieInfo.title"/>
    <input type="text" v-model="movieInfo.author"/>
    <button @click="movies.push('Flash')">Add Movie</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      volume: 0,
      movie: 'Batman',
      movieInfo: {
        title: '',
        author: ''
      },
      movies: ["Batman", "Superman"]
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
    },
    movie: {
      handler(newValue){
        console.log('search for movie ', newValue);
      },
      immediate: true
    },
    movieInfo: {
      handler(newValue){
        console.log(`Movie title - ${newValue.title}, author - ${newValue.author}`);
      },
      deep: true
    },
    movies: {
      handler(newValue){
        console.log(`Movies - ${newValue}`);
      },
      deep: true
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
