const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current')
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current')
    }else{
        slides[0].classList.add('current')
    }
}
const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current')
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current')
    }else{
        slides[slides.length - 1].classList.add('current')
    }
}

next.addEventListener('click', e => {
    nextSlide();
})
prev.addEventListener('click', e => {
    prevSlide();
})

if(auto){
    slideInterval = setInterval(nextSlide,intervalTime)
}