const modal = document.querySelector('.modal')
const modalBtn = document.getElementById('sample-modal')
const closeBtn = document.querySelector('.closeBtn')

modalBtn.addEventListener('click', openFnct);

function openFnct(){
    modal.style.display = 'block'
}

closeBtn.addEventListener('click', closeFnct);
function closeFnct(){
    modal.style.display = 'none'
}

modal.addEventListener('click', open)
function open(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
}