<template>
    <div>
        BLOGS
        <div v-for="blog in blogs" :key="blog.id">
            <p>{{blog.title}}</p>
            <p>{{blog.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogList',
    data(){
        return {
            blogs: [
                {id: 1, title: 'Yoga Benefits', description: 'Description 1'},
                {id: 2, title: 'Best places to visit', description: 'Description 2'},
                
            ]
        }
    }        
}
</script>

<style scoped>

</style>