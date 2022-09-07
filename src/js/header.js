// HEADER BURGER

let body = document.querySelector("body");
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
});

 const links = document.querySelector('[data-links="header-links"]');
 const headerLink = links.querySelectorAll('[data-id]');

 if (links) {
   for (let link of headerLink) {
     link.addEventListener('click', ()=> {
       if(body.classList.contains('lock')) {
         body.classList.toggle("lock");
         burger.classList.toggle("active");
         menu.classList.toggle("active");
       } else {
         return
       }
     })
   }
 }

 let headerPopupBtn = document.querySelector('.header__popup-desktop')

 if (headerPopupBtn) {
   headerPopupBtn.addEventListener('click', ()=> {
     if(body.classList.contains('lock')) {
       body.classList.toggle("lock");
       burger.classList.toggle("active");
       menu.classList.toggle("active");
     } else {
       return
     }
   })
 }

 // scroll button where buy

document.addEventListener('scroll', () => { 

    let scrollTop = window.scrollY;    
    let headerBuyBtn = document.querySelector('.header__btn-buy');
    let headerContainer = document.querySelector('.header__container');

    if(scrollTop >= 400){
        headerBuyBtn.classList.add('header__btn-buy-show');
        headerContainer.style.background = '#fff'
    }else{
        headerBuyBtn.classList.remove('header__btn-buy-show');
        headerContainer.style.background = 'none'
    }
    });