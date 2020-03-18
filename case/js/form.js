$(document).ready(function(){
	$('#inquiryForm').submit(function(){
		var regNumber = /[0-9]/,
		regEmail = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
		 regPhone = /^1[0-9]{10}$/,
		$productName = $('input[name="productName"]'),
		$goodsCount = $('input[name="goodsCount"]'),
		$unitName = $('select[name="unitName"]'),
		$goodsPurity = $('input[name="goodsPurity"]'),
		$contactPerson = $('input[name="contactPerson"]'),
		$mobilePhone = $('input[name="mobilePhone"]'),
		$contactEmail = $('input[name="contactEmail"]'),
		$country = $('select[name="country"]'),
		$province = $('select[name="province"]'),
		$city = $('select[name="city"]'),
		$address = $('input[name="address"]'),
		$deadline = $('select[name="deadline"]');
		if($productName.val()==""){
			errorMsg($productName);
			return false;
		} else if ($productName.val().length > 10) {
			errorMsg($productName,'请输入公司名称');
			return false;
		}
		if ($goodsCount.val()=="") {
			errorMsg($goodsCount);
			return false;
		} else if (!regNumber.test($goodsCount.val())) {
			errorMsg($goodsCount,'请输入数量');
			return false;
		}
		if ($unitName.val()==0) {
			errorMsg($unitName,'请选择单位');
			return false;
		}
		if ($goodsPurity.val()=="") {
			errorMsg($goodsPurity);
			return false;
		} else if ($goodsPurity.val().length > 20) {
			errorMsg($goodsPurity,'请输入纯度');
			return false;
		}
		if ($contactPerson.val()=="") {
			errorMsg($contactPerson);
			return false;
		} else if ($contactPerson.val().length > 25) {
			errorMsg($contactPerson,'请输入联系人姓名')
		}
		if ($mobilePhone.val()==""){
			errorMsg($mobilePhone);
			return false;
		} else if (!regPhone.test($mobilePhone.val())) {
			errorMsg($mobilePhone,'请输入正确的手机号码');
			return false;
		}
		if ($contactEmail.val()=="") {
			errorMsg($contactEmail);
			return false;
		} else if (!regEmail.test($contactEmail.val())) {
			errorMsg($contactEmail,'请输入正确的邮箱');
			return false;
		}
		if ($country.val() == 0) {
			errorMsg($country,'请选择国家');
			return false;
		}
		if ($province.val()==0) {
			errorMsg($province,'请选择省份');
			return false;
		}
		if ($city.val()==0) {
			errorMsg($city,'请选择城市');
			return false;
		}
		if ($address.val()=="") {
			errorMsg($address,'请输入收货地址');
			return false;
		}
		if ($deadline.val()==0) {
			errorMsg($deadline,'请选择有效期');
			return false;
		}
	});

	$('.item-style,.select-item').on('click',function(){
		$(this).removeClass('error').closest('dd').removeClass('form-error').find('.icon-error').html('*');
	});
	
	function errorMsg(dom,msgcont){
		dom.addClass('error').closest('dd').addClass('form-error').find('.icon-error').html(msgcont);
	}
});

 //关注 取消关注
    $('.follow').click(function(){
        var $this = $(this);
        var folnum = $this.find('span').data('folnum');
        if($this.hasClass('active-follow')){
            $this.removeClass('active-follow');
            $this.find('span').text('关注（'+folnum+'）');
        }else{
        
             $this.addClass('active-follow');
            $this.find('span').text('已关注（'+folnum+'）');
        }
    }); 
   //更多 收起
  
    $('.type-more').on('click',function() {
        var $that = $(this);
        if ($that.hasClass('fold')) {
            $that.removeClass('fold').addClass('unfold').html('收起').parent('.goods-nav').height('auto');
        } else {
            $that.removeClass('unfold').addClass('fold').html('更多').parent('.goods-nav').height('50px');
        }
    });
  

    //   更多是否显示
    $(".goods-nav").each(function () {
    	console.log(this.offsetHeight+":"+this.scrollHeight);
        if (this.offsetHeight < this.scrollHeight) {
            $(this).find('.type-more').show();
        }
    });
// $('.goods-nav').each(function(){
//         var $that = $(this).height();
//         if ($that<=30) {
//            $that.siblings('.type-more').hide() 
//         } else{
//             $that.siblings('.type-more').show()
//         }
//     })
// // 气泡
//     function titlePup() {
//         var d = dialog({
//             id: 'titlePup',
//             align: 'bottom left',
//             skin: 'tit-pup',
//             zIndex: 300,
//             quickClose: true
//         });
//         $('[data-pup="titlepup"]').hover(function() {
//             var that = this;
//             var dataCont = $(this).data('title');
//             d.content(dataCont);
//             $(this).css({
//                 'position': 'relative',
//                 'z-index': '302'
//             });
//             d.show(that);
//         }, function(e) {
//             e.target.removeAttribute('style');
//             d.close();
//         });
//     }
//     titlePup();

   if($(".post-bd ul li").length > 1){
        $(".goods-post").slide({titCell:".post-hd ul",mainCell:".post-bd ul",autoPage:true,effect:"leftLoop",autoPlay:true});
    };
     if($(".slider ul li").length > 1){
        $(".slide-box").slide({titCell:".slider-paging ul",mainCell:".slider ul",autoPage:true,effect:"leftLoop",autoPlay:true});
    };
	console .log(innerHeight);
	function jumpPage(){
		var page = parseInt($("#goToPageNum").val());
		var totalpage = $('#totalpage').val();
		if(page>totalpage || page <0){
			page =1;
		}
		if(page){
			location.href=$('.go_to_page_num').data('url')+'&page'+page;
		}
	}
 $('#status-type').change(function(){
	 if($('#status-type').val()==0){
		 
	 }
 })