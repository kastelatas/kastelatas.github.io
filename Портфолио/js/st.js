$(document).ready(function(){
	function heightDetect(){$('header').css('min-height',$(window).height());};
	heightDetect();
	$(window).resize(function(){heightDetect();});
	new WOW().init();
	if(!device.tablet()&&!device.mobile()){
		$('.player').mb_YTPlayer();
	}
	else{
		$('header').addClass('main-header-img');
	};
	$('.top_mnu a, .top_a').mPageScroll2id();
	$("form#order").submit(function()
		{$.ajax({type:"GET",url:"mail.php",data:$("form").serialize()}).done(function(){$('.submission_form').css('display','none');$('.went').css('display','block');setTimeout(function(){$('#modal_form').fadeOut(400);$('#overlay').fadeOut(400);},1500);});return false;});$("form#contact").submit(function(){$.ajax({type:"GET",url:"mail_contact.php",data:$("form").serialize()}).done(function(){$('.form_msg').addClass('form_blur');$('.form_ready').css('display','block');setTimeout(function(){$('.form_msg').removeClass('form_blur');$('.form_ready').fadeOut(400);},2000);});return false;});$('a.order').click(function(event){event.preventDefault();$('#overlay').fadeIn(400,function(){$('#modal_form').css('display','block').animate({opacity:1,top:'50%'},200);});});$('#modal_close, #overlay').click(function(){$('#modal_form').animate({opacity:0,top:'40%'},200,function(){$(this).css('display','none');$('#overlay').fadeOut(400);});});$('.toggle_mnu').click(function(){$(this).toggleClass('active');$('.top_mnu').toggleClass('active_mnu');$('.menu_internal_1').toggleClass('animated');$('.menu_internal_1').toggleClass('fadeInDown');$('.menu_internal_1').toggleClass('an_1-1');$('.menu_internal_2').toggleClass('animated');$('.menu_internal_2').toggleClass('fadeInDown');$('.menu_internal_2').toggleClass('an_2-1');$('.menu_internal_3').toggleClass('animated');$('.menu_internal_3').toggleClass('fadeInDown');$('.menu_internal_3').toggleClass('an_3-1');$('.menu_internal_4').toggleClass('animated');$('.menu_internal_4').toggleClass('fadeInDown');$('.menu_internal_4').toggleClass('an_4-1');});});$('.slide_phone').slick({centerMode:true,variableWidth:true,arrows:false});$('#dg-gallery').gallery();$(".tab_item").not(":first").hide();$(".tab").click(function(e){$(".tab a").removeClass("active").eq($(this).index()).addClass("active");$(".tab_item").hide().eq($(this).index()).fadeIn()
e.preventDefault();});$(window).scroll(function(){var st=$(this).scrollTop();$('.top-text').css({'transform':'translate(0%,'+st/10+'%'});});$(window).load(function(){$(".loader_inner").fadeOut();$(".loader").delay(400).fadeOut("slow");});
