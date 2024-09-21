// nav
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    // 클릭한 링크의 href 속성 값 추출
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    // 해당 섹션으로 부드럽게 스크롤 이동
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

// 햄버거 버튼
const menuTrigger = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuTrigger.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active-1');
  nav.classList.toggle('active-2');
});

// 메뉴 버튼 클릭 시 메뉴영역 닫힘
document.querySelectorAll('nav ul li').forEach( e => {
  e.addEventListener('click',function(event){
    nav.classList.toggle('active-2');
    menuTrigger.classList.toggle('active-1');
  })
});

// reload
  document.querySelector('header .logo').addEventListener('click',function(){
    location.reload();
    window.scrollTo({ top: 0 });
  })

// scroll event
window.addEventListener('scroll', function(){
  // electricBulb
  let electricBulb = document.querySelector('.object-electricBulb');
  if(window.scrollY > 1000){
    electricBulb.style.opacity = 0;
  }else{
    electricBulb.style.opacity = 1;
  };

  // wrok buble
  var h = document.documentElement.scrollTop || document.body.scrollTop;
  if ( h > 300 && h < 1500 ) {
    document.querySelectorAll('#work .object img').forEach(function(el) {
      el.style.scale = '1';
    });
  } else {
    document.querySelectorAll('#work .object img').forEach(function(el) {
      el.style.scale = '0';
    });
  };
});

// projcetItem Observer
let Observer = new IntersectionObserver((event)=>{
  event.forEach((box)=>{
    if(box.isIntersecting){
      box.target.style.opacity = 1;
      // box.target.style.transform = 'translateY(30%)';
    }else {
      box.target.style.opacity = 0;
      // box.target.style.transform = 'translateY(0)';
    }
  })
})

let projectItem = document.querySelectorAll('.project-item');
Observer.observe(projectItem[0]);
Observer.observe(projectItem[1]);
Observer.observe(projectItem[2]);
Observer.observe(projectItem[3]);