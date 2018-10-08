<template>
    <div>
        <h1>新闻{{$route.params.id}}</h1>
        <comment-box></comment-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    export default{
        components: {
            "comment-box": comment
        }
    }

</script>

<style lang="scss" scoped>

</style>