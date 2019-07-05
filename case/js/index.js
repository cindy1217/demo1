	//加载进度计时器
	$(function(){
		var loading = '<div class="loading_box"><div class="box"></div><img src="images/loading.gif"></div>';
		$('body').append(loading);
		setTimeout(function(){
			$('.loading_box').fadeOut()
		},2000)
	})
	//table切换
	$('.nav li').hover(function(){
		_this=$(this);
		_this.addClass('on').siblings().removeClass('on');
		$('.table-hd li').eq(_this.index()).show().siblings().hide()
	})
	//左侧滚动悬浮定位
	function showAdv(){
		var debounce = null;
		var setTop = document.getElementsByClassName('scroll-item')[0].offsetTop
		console.log(setTop)
		window.onscroll= function(){
		//滚动条y轴到上的距离
			var t = document.documentElement.scrollTop||document.body.scrollTop;
			console.log(t)
			if(debounce){
				clearTimeout(debounce)
			}
			debounce = setTimeout(function(){
				if( t > setTop){
					$('.scroll-item').css({"position":"fixed",top:0})
				}else{
					$('.scroll-item').css("position","relative")
				}
			},10)
		}
	}
	showAdv()