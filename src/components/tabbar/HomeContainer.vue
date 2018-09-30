<template>
    <div>
        <mt-swipe v-for="item in pictureList" :key="item.url" :auto="4000">
            <mt-swipe-item>
                <img :src="item.img" alt="">
            </mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <h3>HomeContainer</h3>
    </div>
</template>

<script>
export default{
    data(){
        return {
            pictureList: []
        }
    },
    methods:{
        getPictureRoll(){
//            this.$http.get().then(result => {
//                console.log(result.body);
//            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;

        .mint-swipe-item{
            background-color: red;
        }

        img{
            width: 100%;
            height: 100%;
        }
    }



</style>