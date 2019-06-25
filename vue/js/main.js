Vue.component('tooltip',{
	template:`
	<div>
		<span @mouseenter="show" @mouseleave="hide">bys</sapn>
		<div v-if="visible">白雪公主</div>
	</div>
	`,
	methods:{
		show: function(){
			this.visible= true;
		},
		hide: function(){
			this.visible=false;
		}
	},
	data:function(){
		return{
			visible: false,
		}
	}
})
Vue.component('popup',{
	template:`
	<div>
	<button @click="toggle">popup<button>
	<div v-if="visible">
		<h4>title</h4>
		恒大华府教科书的恢复健康时代峻峰含税单价咖啡时间段恢复健康的沙发了的是否会受到借款方
	</div>
	</div>
	`,
	methods:{
		toggle: function(){
			this.visible = !this.visible;
		}
	},
	data:function(){
		return{
			visible: false,
		}
	}
})
var pc = new Vue({
	el:'#pc',
	
})
// var app = new Vue({
// 	el:'#app',
// 	methods:{
// 		onClick: function(){
// 			console.log('clicked')
// 		},
// 		onEnter: function(){
// 			console.log('mouse enter');
// 		},
// 		onOut: function(){
// 			console.log('mouse leave')
// 		},
// 		onSubmit: function(){
// 			console.log('submitted')    
// 		},
// 		onKeyup: function(){
// 			console.log('key passed')
// 		}
// 	},
// 	data:{
// 		price: 10,
// 		sex: 'male',
// 		from: 2,
// 		dest:[],
// 		role: 'super_admin',
// 		listData:[
// 			{name: '张韶涵',adress:'台湾',},
// 			{name: '钟汉良',adress: '香港',},
// 		],
// 		foodList:[
// 			{name:'香蕉',color:'黄色'},
// 			{name:'苹果',color:'黄色'}
// 		],
// 		url:'https://baidu.com',
// 		img:'https://dummyimage.com/100*100/333',
// 		isActive: true,
// 		klass: 'btn btn-default',
// 	}
// })
// Vue.component('like',{
// 	template:'<button @click="toggle_like()">**{{like_count}}</button>',
// 	data: function(){
// 		return{
// 			like_count: 10,
// 			like: false,
// 		}
// 	},
// 	methods:{
// 		toggle_like: function(){
// 			if(!this.liked)
// 			this.like_count++;
// 		  this.liked = !this.liked;
// 		}
// 	}
// })
