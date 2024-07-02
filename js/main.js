$(document).ready(function(){
	AOS.init();
	
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


		// 메뉴 클릭 시 해당 섹션으로 이동
		$(".nav li a").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 900);
		});

		// 애니메이션 효과
		// $(window).on('scroll', function() {
		// 	var targetAbout = $('#about article');
		// 	var scrollTop = $(window).scrollTop();
		// 	var elementOffset = targetAbout.offset().top;
		// 	var windowHeight = $(window).height();

		// 	if (scrollTop + windowHeight > elementOffset) {
		// 		targetAbout.addClass('fade-in');
		// 	}
		// });

});