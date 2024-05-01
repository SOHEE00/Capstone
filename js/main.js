const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input');

searchEL.addEventListener('click', function() {
    searchInputEL.focus();
});

searchInputEL.addEventListener('focus',function() {
    searchEL.classList.add('focused');
    searchInputEL.setAttribute('placeholder', '통합검색');
});

searchInputEL.addEventListener('blur',function() {
    searchEL.classList.remove('focused');
    searchInputEL.setAttribute('placeholder', '');
});





//gsap은 애니메이션 처리해주는 라이브러리 제공





promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion //!을 붙이면 반대로 되게함
    if (isHidePromotion) {
        //숨김처리
        promotionEl.classList.add('hide');

    }else {
        //보임처리 
        promotionEl.classList.remove('hide'); 
    }
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear; //2023