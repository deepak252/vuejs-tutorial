<template>
  <div>
    <pre>
      {{JSON.stringify(formData, null, 2)}}
    </pre>
  </div>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name"> Name </label>
      <!-- <input type='text' id="name" v-model.trim="formData.name" /> -->
      <input type='text' id="name" v-model.trim.lazy="formData.name" />
    </div>
    <div>
      <label for="bio"> Bio </label>
      <textarea id="bio" v-model="formData.bio" />
    </div>
    <div>
      <label for="gender"> Gender </label>
      <select id="bio" v-model="formData.gender" >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div>
      <label for="location"> Work Location </label>
      <select id="location" multiple v-model="formData.location" >
        <option value="delhi">Delhi</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="noida">Noida</option>
      </select>
    </div>
    <div>
      <input id="remote-work" type='checkbox' v-model="formData.remoteWork" />
      <label for="remote-work"> Open to Remove Work </label>
    </div>
    <div>
      <p>Skills</p>
      <input id="javascript" type='checkbox' value='javascript' v-model="formData.skills" />
      <label for="javascript"> javascript </label>
      <input id="java" type='checkbox' value='java' v-model="formData.skills" />
      <label for="java"> Java </label>
      <input id="kotlin" type='checkbox' value='kotlin' v-model="formData.skills" />
      <label for="kotlin"> Kotlin </label>
    </div>
    <div>
      <p>Experience</p>
      <input id="fresher" type='radio' value='javascript' v-model="formData.experience" />
      <label for="fresher"> javascript </label>
      <input id="intermediate" type='radio' value='intermediate' v-model="formData.experience" />
      <label for="intermediate"> Java </label>
      <input id="experienced" type='radio' value='experienced' v-model="formData.experience" />
      <label for="experienced"> Experienced </label>
    </div>
    <div>
      <label for="age"> Age </label>
      <input type='text' id="age" @keyup.enter="submitForm" v-model.number="formData.age" />
    </div>
    <button>Submit</button>
  </form>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      formData: {
        name: 'Deepak',
        gender: '',
        location: [],
        remoteWork: false,
        skills: []
      }
    }
  },
  methods: {
    submitForm(){
      console.log(this.formData);
    }
    // submitForm(event){
    //   event.preventDefault();
    //   console.log(this.formData);
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
