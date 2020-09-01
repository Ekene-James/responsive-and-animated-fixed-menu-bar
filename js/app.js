
const burger = document.querySelector('.burger');
const ul = document.querySelector('.nav-lists');
const li = document.querySelectorAll('.nav-list');
const header = document.querySelector('.header');

const navSlide = () => {
    
    burger.addEventListener('click', () => {
        ul.classList.toggle('nav-active');
        //li aanimations
        li.forEach((li,i) => {     
         li.style.animation ? li.style.animation = '' :  li.style.animation =`navLinkfades 0.5s ease forwards ${i/5 + 0.4}s`;
    })
    //burger class toggle to 'toggle'
    burger.classList.toggle('toggle');
    })
}

window.addEventListener('scroll', () =>{
    const scrollPosition = window.scrollY;
    if(scrollPosition > 10){
        header.classList.add('scrolled')
    }else{
        header.classList.remove('scrolled')

    }

})

navSlide();

   