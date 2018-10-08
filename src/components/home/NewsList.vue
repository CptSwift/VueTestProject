<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsinfo/' + '1'">
                    <img class="mui-media-object mui-pull-left" src="http://img-cdn-qiniu.dcloud.net.cn/uploads/avatar/000/08/77/69_avatar_mid.jpg">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>
                            <span>发表时间：2012-12-12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="http://img-cdn-qiniu.dcloud.net.cn/uploads/avatar/000/08/77/69_avatar_mid.jpg">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>
                            <span>发表时间：2012-12-12</span>
                            <span>点击：0次</span>
                        </p>                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="http://img-cdn-qiniu.dcloud.net.cn/uploads/avatar/000/08/77/69_avatar_mid.jpg">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>
                            <span>发表时间：2012-12-12</span>
                            <span>点击：0次</span>
                        </p>                    </div>
                </a>
            </li>

            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.add_time | dataFormat }}</span>
                            <span>点击：{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>

<script>
    export default{
        data(){
            return {
                newslist: []
            }
        },
        methods:{
            getNewsList(){
                this.$http.get('api/getnewlist').then(result => {
                    if(result.body.status === 0){
                        this.newslist = result.body.message;
                    }else{
                        Toast('新闻获取失败');
                    }
                });
            }
        }
    }
</script>