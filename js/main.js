$(document).ready(function(){
	AOS.init();
	
	// 스크롤 시 헤더 표시
	$("html").on("mousewheel", function(event, delta){
		if(delta < 0){
			$("header").css("opacity" ,"1");
		}
	});

	// about 애니메이션 
	$(window).scroll(function() {
		// 현재 스크롤 위치 확인
		var scrollPosition = $(this).scrollTop();
		// 특정 구간을 지정하여 애니메이션을 추가할 요소 선택
		var targetElement = $('#about .about-text h1');
		// 특정 스크롤 위치에 도달하면 애니메이션 추가
		if (scrollPosition > 700) {
				targetElement.addClass('lineani');
		} else {
				targetElement.removeClass('lineani');
		}
	});

	// 버튼 클릭 시 드롭다운 메뉴 활성화
	$("header .menu-btn").click(function(){
		$(".dropDown-nav").slideToggle();
	})

	// 메뉴 클릭 시 해당 섹션으로 이동
	$(".nav li a").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 900);
	});


});

