	//加载进度计时器
	$(function(){
		var loading = '<div class="loading_box"><div class="box"></div><img src="../images/loading.gif"></div>';
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
		window.onscroll= function(){
		//滚动条y轴到上的距离
			var t = document.documentElement.scrollTop||document.body.scrollTop;
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
	// 电子发票数据为空
    var isInputValueDianzi = false
    function electronicInvoiceKong() {
        var domList1 = $('#invoiceFormElectron .form-list').find('.form-group').find('input')
        for(var i=0; i < domList1.length; i++) {
            domList1[i].value != "" ? isInputValueDianzi = true : ""
        }
        isInputValueDianzi ? $('.e-invoice .modify1').show() : $('.e-invoice .modify1').hide()
    }
    // 电子
    electronicInvoiceKong()
    // 纸质发票数据为空
    var isInputValueZhizi = false;
    function papeInvoiceKong() {
        var domList2 = $('#invoiceForm .form-list').children().children('.form-group').find('input')
        for(var j=0; j < domList2.length; j++) {
            domList2[j].value != "" ? isInputValueZhizi = true : ""
        }
        isInputValueZhizi ? $('.paper-invoice .modify1').show() : $('.paper-invoice .modify1').hide()
        
    }
    // 纸质
    papeInvoiceKong()
	 //展开收起
    //电子发票
    function dianziClick () {
        $(".e-invoice .invoice-view1").hide();
        $('.e-invoice .invoice-modify1').show();
        $(this).hide();
        $('.e-invoice .type-more').removeClass('none');
        var domType = $('.e-invoice .type-more');
        for(var i = 0; i < domType.length; i++) {
            $(domType[i]).data('show') ? $(domType[i]).addClass('none') : ''
        }
    }
    $(".e-invoice .modify1").on('click', function() {
         dianziClick();
        $('.e-invoice .invoice-cancel').show()
        $('.e-invoice .modify1').hide()
    });
	$('.e-invoice .type-more').on('click',function() {
        
        $('.e-invoice .type-more').removeClass('none')
        $(this).addClass('none')
        if($(this).data('show')) {
            if(!isInputValueDianzi){
                dianziClick();
                $('.e-invoice .modify1').hide()
            }else {
                $(".e-invoice .invoice-view1").slideDown(400);
                $(".e-invoice .invoice-modify1").slideUp(400);    
            }
        }else {
            if(isInputValueDianzi) {
                $('.e-invoice .modify1').show()
            }
            $(".e-invoice .invoice-view1").slideUp(400);
            $(".e-invoice .invoice-modify1").slideUp(400);
        }
    })
    $('.e-invoice .e-invoice-tit p').on('click',function(){
        $(".paper-invoice .invoice-view1").hide();
        $(".paper-invoice .invoice-modify1").hide();
        $(".paper-invoice .e-invoice-tit .type-more").removeClass('none')
        var domType = $(".paper-invoice .e-invoice-tit .type-more")
        for(var i = 0 ; i < domType.length; i++) {
            !$(domType[i]).data('show') ? $(domType[i]).addClass('none') : ''
        }
        $(this).parent().children('span').children('.type-more').removeClass('none')
        var domType2 = $(this).parent().children('span').children('.type-more') 
        for(var j= 0; j< domType2.length; j++) {
            $(domType2[j]).data('show') ? $(domType2[j]).addClass('none') : ''
        }
        if(!isInputValueDianzi) {
            $(".e-invoice .invoice-modify1").slideDown(400);    
            $(".e-invoice .invoice-view1").slideUp(400);
        }else {
            $(".e-invoice .invoice-view1").slideDown(400);
            $(".e-invoice .invoice-modify1").slideUp(400);    
        }
    })

    $(".e-invoice .invoice-cancel").on('click', function() {
        $(".e-invoice .invoice-modify1").slideUp(400);
        $(".e-invoice .invoice-view1").slideDown(400);
        $('.e-invoice .modify1').show()

        //取消编辑，input内的数据全还原
        var eleForm = $('#invoiceFormElectron');
        eleForm.find("input[name=company_name]").val($('#company_name_electron').text());
        eleForm.find("input[name=tax_number]").val($('#tax_number_electron').text());
        eleForm.find("input[name=e_mail]").val($('#normal_invoice_e_mail').text());
        eleForm.find("input[name=e_mobile]").val($('#normal_invoice_e_mobile').text());
        eleForm.find('input.error').removeClass("error");
        $('#invoiceBtnElectron_tips').html('');
    });
    //纸质发票
    function zhiziClick() {
        $(".paper-invoice .invoice-view1").hide();
        $('.paper-invoice .invoice-modify1').show();
        $(this).hide();
        $('.paper-invoice .type-more').removeClass('none');
        var domType = $('.paper-invoice .type-more');
        for(var i = 0; i < domType.length; i++) {
            $(domType[i]).data('show') ? $(domType[i]).addClass('none') : ''
        };
        
    }
   
    $(".paper-invoice .modify1").on('click', function() {
        zhiziClick();
        $('.paper-invoice .invoice-cancel').show()
        $('.paper-invoice .modify1').hide()

    });
    $('.paper-invoice .type-more').on('click',function() {
        $('.paper-invoice .type-more').removeClass('none')
        $(this).addClass('none')
        if($(this).data('show')) {
            if(!isInputValueZhizi) {
                zhiziClick()
                $('.paper-invoice .modify1').hide()
            }else {
                $(".paper-invoice .invoice-view1").slideDown(400);
                $(".paper-invoice .invoice-modify1").slideUp(400);
            }
        }else {
            if(isInputValueZhizi) {
                $('.paper-invoice .modify1').show()
            }
            $(".paper-invoice .invoice-view1").slideUp(400);
            $(".paper-invoice .invoice-modify1").slideUp(400);
        }
    })
      $('.paper-invoice .e-invoice-tit p').on('click',function(){
        $(".e-invoice .invoice-view1").hide();
        $(".e-invoice .invoice-modify1").hide();
        $(".e-invoice .e-invoice-tit .type-more").removeClass('none')
        var domType = $(".e-invoice .e-invoice-tit .type-more")
        for(var i = 0 ; i < domType.length; i++) {
            !$(domType[i]).data('show') ? $(domType[i]).addClass('none') : ''
        }
        $(this).parent().children('span').children('.type-more').removeClass('none')
        var domType2 = $(this).parent().children('span').children('.type-more') 
        for(var j= 0; j< domType2.length; j++) {
            $(domType2[j]).data('show') ? $(domType2[j]).addClass('none') : ''
        }
        if(!isInputValueZhizi) {
            $(".paper-invoice .invoice-view1").slideUp(400);
            $(".paper-invoice .invoice-modify1").slideDown(400);
        }else {
            $(".paper-invoice .invoice-view1").slideDown(400);
            $(".paper-invoice .invoice-modify1").slideUp(400);
        }
    })

    $(".paper-invoice .invoice-cancel").on('click', function() {
        $(".paper-invoice .invoice-modify1").slideUp(400);
        $(".paper-invoice .invoice-view1").slideDown(400);
        $('.paper-invoice .modify1').show();

        //取消编辑，input内的数据全还原
        var paperForm = $('#invoiceForm');
        paperForm.find("input[name=company_name]").val($('#company_name_2').text());
        paperForm.find("input[name=tax_number]").val($('#tax_number_2').text());
        paperForm.find("input[name=contact]").val($('#contact_2').text());
        paperForm.find("input[name=mobile_phone]").val($('#normal_invoice_phone').text());
        paperForm.find("input[name=invoice_address]").val($('#invoice_address_2').text());
        paperForm.find('input.error').removeClass("error");
        $('#invoiceBtn_tips').html('');
    });
