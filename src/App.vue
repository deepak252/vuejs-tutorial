<template>
    <div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <span>' '</span><RouterLink to="/blogs">BLogs</RouterLink>
        </nav>
        <main>
            <RouterView :key="$route.fullPath"/>
        </main>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {
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
