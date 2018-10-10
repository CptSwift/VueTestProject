<template>
    <div class="goodinfo-container">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotuList" :isFull="false"></swiper>
                </div>
            </div>
        </div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsinfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sell_price }}</span>
                    </p>
                    <p>购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                        <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
                        <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
                        <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
                        <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
                        <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
                    </p>
                </div>
            </div>
        </div>


        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ goodsinfo.goods_no }}</p>
                    <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
                    <p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import swiper from '../subcomponents/swiper.vue'
    import numbox from "../subcomponents/gi_numberbox.vue";
    export default {
        data() {
            return {
                lunbotuList: [
                    {img: "https://img.meituan.net/iphoenix/3dcd2586502a7f6390b249b08f405e8d3305010.jpg@740w_416h_1e_1c"},
                    {img: "http://p1.meituan.net/phoenix/73b5bd401220c90731a64db5e7250d3f880565.jpg@740w_416h_1e_1c"},
                    {img: "http://p1.meituan.net/iphoenix/2501d8fcb20f9141fbd809f2a8f6110d1145177.jpg@740w_416h_1e_1c"}
                ], // 保存轮播图的数组
                id: this.$route.params.id, // 将路由参数对象中的 id 挂载到 data , 方便后期调用
                goodsinfo: {
                    id: 1,
                    img_url: "http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200119256512.jpg",
                    title: '小米（Mi）小米Note 16G双网通版',
                    sell_price: 899,
                    market_price: 999,
                    stock_quantity: 6
                }, // 获取到的商品的信息
                ballFlag: false,
                selectedCount: 1
            };
        },
        created() {
            this.getLunbotu();
            this.getGoodsInfo();
        },
        methods:{
            getLunbotu() {
                // 获取轮播图数据的方法
//                this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
//                    // console.log(result.body);
//                    if (result.body.status === 0) {
//                        // 成功了
//                        result.body.message.forEach(item => {
//                            item.img = item.src;
//                        })
//                        this.lunbotuList = result.body.message;
//                    } else {
//                        // 失败的
//                        Toast("加载轮播图失败。。。");
//                    }
//                });
            },
            getGoodsInfo() {
                // 获取商品的信息
//                this.$http.get("api/goods/getinfo/" + this.id).then(result => {
//                    if (result.body.status === 0) {
//                        this.goodsinfo = result.body.message[0];
//                    }
//                });
            },
            addToShopCar() {
                this.ballFlag = !this.ballFlag;
            },
            beforeEnter(el) {
                el.style.transform = "translate(0,0)"
            },
            enter(el, done) {
                el.offsetWidth

                const ballPosition = this.$refs.ball.getBoundingClientRect()
                const badgePosition = document.getElementById('badge').getBoundingClientRect()

                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top

                el.style.transform = `translate(${xDist}px,${yDist}px)`
                el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)"
                done()
            },
            afterEnter(el) {
                this.ballFlag = ! this.ballFlag
            },
            getSelectedCount(count) {
                this.selectedCount = count
                console.log("父组件拿到的数量值为： " + this.selectedCount);
            }
        },
        components:{
            swiper,
            numbox
        }
    }
</script>

<style lang="scss" scoped>
    .goodinfo-container {
        background-color: #eee;

        .now_price {
            color: red;
            font-size: 16px;
            font-weight: bold;
        }

        .mui-card-footer {
            display: block;
            button {
                margin: 15px 0;
            }
        }

        .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 99;
            top: 390px;
            left: 146px;
        }
    }
</style>