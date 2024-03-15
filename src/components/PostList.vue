<template>
    <div>
        <button @click="getPosts">Get Posts</button>
        <p v-if="isLoading">Loading...</p>
        <p v-else-if="errorMsg">{{errorMsg}}</p>
        <div v-else>
            <div v-for="post in posts" :key="post.id">
                <h4>{{post.title}}</h4>
                <p>{{post.title}}</p>
                <hr />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PostList',
    data(){
        return {
            posts: [],
            isLoading: false,
            errorMsg: ''
        }
    },
    methods: {
        getPosts(){
            this.isLoading = true;
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                if(response.status==200){
                    this.errorMsg = '';
                    this.posts = response.data;
                }
            })
            .catch(err=>{
                console.log(err);
                this.errorMsg = 'Error while fetching data';
            })
            .finally(()=>{
                this.isLoading = false;
            })
        }
    }
}
</script>

<style scoped>

</style>