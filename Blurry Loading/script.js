const loadItem = document.querySelector('.loading');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 20);

function blurring(){
        load ++;
        if(load > 99){
                clearInterval(int);
        }
        loadItem.textContent = `${load}%`;
        loadItem.style.opacity = scale(load, 0, 100, 1, 0);
        bg.style.filter = `blur(${scale(load, 0, 100, 50, 1)}px)` 

        
}
function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

