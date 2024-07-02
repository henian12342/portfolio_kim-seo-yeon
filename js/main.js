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


		// 메뉴 클릭 시 해당 섹션으로 이동
		$(".nav li a").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 900);
		});

});