const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.getElementById('modal');


openBtn.addEventListener('click', openFnct);

function openFnct(){
    modal.style.display = 'block'
}

closeBtn.addEventListener('click', closeFnct);

function closeFnct(){
    modal.style.display = "none"
}

window.addEventListener('click', fnct);

function fnct(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
}