const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn')
const modal = document.querySelector('.modal')

openBtn.addEventListener('click', () => {
    modal.style.display = 'block'
    modal.classList.remove('hide')
    modal.classList.add('show')
})

closeBtn.addEventListener('click', closeModal)

window.addEventListener('click', (e) => {
    if(e.target == modal){
        modal.classList.remove('show')
        modal.classList.add('hide')

        setTimeout(() => {
            modal.style.display = 'none'
        },700)
    }
})

function closeModal(){
    modal.classList.remove('show')
    modal.classList.add('hide')

    setTimeout(() => {
        modal.style.display = 'none'
    },700)
}