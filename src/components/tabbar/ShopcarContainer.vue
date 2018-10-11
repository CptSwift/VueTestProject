<template>
	<div class="shopcar-container">
		<div class="goods-list">
			<div class="mui-card" v-for="item in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
						<img :src="item.img_url">
						<div class="info">
							<h1>{{item.title}}</h1>
							<p>
								<span class="price">￥{{item.sell_price}}</span>
								<numbox></numbox>
								<a href="#">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import numbox from "../subcomponents/sc_numberbox.vue"

export default{
	data(){
		return {
			goodslist: []
		}
	},
	methods: {
		created(){
			this.getGoodsList()
		},
		getGoodsList(){
			var idArr = []
			this.$store.state.car.forEach(item => idArr.push(item.id))
			if(idArr.length <= 0) return
		}
	},
	components: {
		numbox
	}
}
</script>

<style lang="scss" scoped>
.shopcar-container{
	background-color: #eee;
	overflow: hidden;
}

.goods-list{
	.mui-card-content-inner{
		display: flex;
		align-items: center;
	}
	img{
		width: 60px;
		height: 60px;
	}
	h1{
		font-size: 14px;
	}
	.info{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.price{
			color: red;
			font-weight: bold;
		}
	}
}
</style>