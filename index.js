'use strict'


const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i],
            animItemHeight = animItem.offsetHeight,
            animItemOffset = offset(animItem).top,
            animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemPoint > window.innerHeight) {
              animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && (scrollY < animItemOffset + animItemHeight)) {
              animItem.classList.add('_active');
            } else {
              if (!animItem.classList.contains('_active-no-hide')) {
                animItem.classList.remove('_active');
              }
            }
    } 
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
          scrollLeft = window.scrollY || document.documentElement.scrollLeft,
          scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  
  setTimeout(() => {
    animOnScroll(); 
  }, 300);
  
}
