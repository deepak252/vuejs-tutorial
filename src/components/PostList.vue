<template>
    <div>
        <form @submit.prevent="createPost">
            <input type="text" placeholder="User Id" v-model="formData.userId"/>
            <input type="text" placeholder="Title" v-model="formData.title"/>
            <input type="text" placeholder="Description" v-model="formData.description"/>
            <button>SUBMIT</button>
        </form>
        <hr />
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
    created(){
        this.getPosts();
    },
    data(){
        return {
            posts: [],
            isLoading: false,
            errorMsg: '',
            formData: {
                userId:'',
                title: '',
                body: ''
            }
        }
    },
    methods: {
        getPosts(){
            this.isLoading = true;
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                console.log('getPosts - ',response);
                if(response.status==200){
                    this.errorMsg = '';
                    this.posts = response.data;
                }
            })
            .catch(err=>{
                console.log('getPosts - ', err);
                this.errorMsg = 'Error while fetching data';
            })
            .finally(()=>{
                this.isLoading = false;
            })
        },
        createPost(){
            axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
            .then(response=>{
                console.log('createPost', response);
            })
            .catch(err=>{
                console.log('createPost', err);
                this.errorMsg = 'Error while creating post';
            })
        }
    }
}
</script>

<style scoped>

</style>