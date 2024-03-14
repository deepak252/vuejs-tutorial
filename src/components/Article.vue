<template>
    <div>
        <h2>Title - {{title}}</h2>
        <p>{{content}}</p>
        <p>Likes - {{likes}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Article',
        props: {
            title: {
                type: String,
                default: "Article Default Title"
            },
            content: String,
            likes: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>