<template>
    <div>

        <!-- 轮播图区域 -->
        <swiper :lunbotuList="lunbotuList" :isFull="true"></swiper>

                <!-- 九宫格 到 6宫格 的改造工程 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/newslist">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/photolist">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/goodlist">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></li>
        </ul>

    </div>
</template>

<script>
    import { Toast } from "mint-ui";
    import swiper from '../subcomponents/swiper.vue'

    export default {
        data() {
            return {
                lunbotuList: [
                    {url: "https://img.meituan.net/iphoenix/3dcd2586502a7f6390b249b08f405e8d3305010.jpg@740w_416h_1e_1c", img: "https://img.meituan.net/iphoenix/3dcd2586502a7f6390b249b08f405e8d3305010.jpg@740w_416h_1e_1c"},
                    {url: "http://p1.meituan.net/phoenix/73b5bd401220c90731a64db5e7250d3f880565.jpg@740w_416h_1e_1c", img: "http://p1.meituan.net/phoenix/73b5bd401220c90731a64db5e7250d3f880565.jpg@740w_416h_1e_1c"},
                    {url: "http://p1.meituan.net/iphoenix/2501d8fcb20f9141fbd809f2a8f6110d1145177.jpg@740w_416h_1e_1c", img: "http://p1.meituan.net/iphoenix/2501d8fcb20f9141fbd809f2a8f6110d1145177.jpg@740w_416h_1e_1c"}
                ] // 保存轮播图的数组
            };
        },
        created() {
            this.getLunbotu();
        },
        methods: {
            getLunbotu() {
                // 获取轮播图数据的方法
//                this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
//                    // console.log(result.body);
//                    if (result.body.status === 0) {
//                    // 成功了
//                    this.lunbotuList = result.body.message;
//                } else {
//                    // 失败的
//                    Toast("加载轮播图失败。。。");
//                }
//            });
            }
        },
        components:{
            swiper
        }
    };
</script>

<style lang="scss" scoped>

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
    img {
        width: 60px;
        height: 60px;
    }

    .mui-media-body{
        font-size: 13px;
    }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
</style>
