$(document).ready(function(){

		// 스크롤 시 헤더 표시
	$("html").on("mousewheel", function(event, delta){
		if(delta < 0){
			$("header").css("opacity" ,"1");
		}
	});


	// 버튼 클릭 시 드롭다운 메뉴 활성화
	$("header .menu-btn").click(function(){
		$(".dropDown-nav").css("width", "60%")
	})
	$(".close-btn").click(function(){
		$(".dropDown-nav").css("width", "0")
	})


	// 영역 도달 시 해당하는 메뉴 활성화
	var homeSection = $("#home").offset().top;
	var aboutSection = $("#about").offset().top;
	var projectSection = $("#project").offset().top;
	var contactSection = $("#contact").offset().top;

	$(window).scroll(function(){
		var scrollNow = $(window).scrollTop();

		if ( scrollNow >= homeSection && scrollNow < aboutSection) {
			$("header .nav li").removeClass('on');
			$("header .nav li").eq(0).addClass('on');
		}else if ( scrollNow >= aboutSection && scrollNow < projectSection) {
			$("header .nav li").removeClass('on');
			$("header .nav li").eq(1).addClass('on');
		}else if ( scrollNow >= projectSection && scrollNow < contactSection ) {
			$("header .nav li").removeClass('on');
			$("header .nav li").eq(2).addClass('on');
		}else if ( scrollNow >= contactSection ) {
			$("header .nav li").removeClass('on');
			$("header .nav li").eq(3).addClass('on');
		}
	});

		// 메뉴 클릭 시 해당 섹션으로 이동
		$(".nav li a").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 900);
		});

});