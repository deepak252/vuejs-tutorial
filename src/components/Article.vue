<template>
    <div>
        <h2 v-bind="$attrs">Title - {{title}}</h2>
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
        },
        inheritAttrs: false
    }
</script>

<style scoped>

</style>