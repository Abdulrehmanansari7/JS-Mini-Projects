const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart(){
    this.classList.add('hold')
    setTimeout(() => (this.classList.add('invisible')),0)
}

function dragEnd(){
    this.className = 'fill'
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(){
   this.classList.add('hovered')

}

function dragLeave(){
    this.classList.remove('hovered')
}

function dragDrop(){
    this.classList.remove('hovered');
    this.append(fill);
}

