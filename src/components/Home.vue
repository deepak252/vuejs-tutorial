<template>
    <div>
        Welcome to Blogger App
        <button @click="nagivateToBlogs">Show Blogs</button>
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        nagivateToBlogs(){
            this.$router.push({name: 'BlogList'})
        }
    }
}
</script>

<style scoped>

</style>