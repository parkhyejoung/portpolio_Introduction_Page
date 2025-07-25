//전체 수직 스크롤
const wrap = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
})

//프로젝트 슬라이드
const project1 = new Swiper('#project_swiper',{
    scrollbar:{el:'#project_swiper ~ .swiper-scrollbar'},
    navigation:{
        nextEl:'#project_swiper ~ .swiper-button-next',
        prevEl:'#project_swiper ~ .swiper-button-prev',
    }
});

//sns 프로젝트
const sns = new Swiper('#sns_swiper',{
    slidesPerView:3,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:5000,
    loop:true,
})

// sns 프로젝트 클릭 시 팝업 실행(클릭한 이미지가 팝업 이미지로 교체)
const snsProject = document.querySelectorAll('#sns_swiper .swiper-slide');
const popup = document.querySelector('.popup_bg');

console.log(snsProject,popup);
for(let sns of snsProject){
    sns.addEventListener('click',()=>{
        popup.style.display = 'block';
        popup.children[0].children[0].src = sns.children[0].src;
        //팝업 실행 시 전체 수직 Swiper 스크롤 기능 막기
        wrap.mousewheel.disable();
    })
}

/* popup.addEventListener('click',()=>{
    popup.style.display = 'none'
    wrap.mousewheel.enable();
})
 */
//내비게이션 클릭 시 해당 위치 스와이프(wrap변수)로 이동
const nav = document.querySelectorAll('nav a');
//수직 스와이프 이동 함수 
//수직스와이프변수명.slideTop(이동인덱스값,지속시간)
nav.forEach((odj, idx)=>{
    console.log(odj, idx);
    odj.addEventListener('click',(e)=>{
        e.preventDefault(); //a의 기본기능막기
        wrap.slideTo(idx, 1000);
    })
})
const swiper = new Swiper('#project_swiper', {
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
});