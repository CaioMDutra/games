const skate = document.querySelector(".skate");
const pipe = document.querySelector(".pipe");
const score =   document.querySelector(".score")
let count = 0;

function jump () {
    skate.classList.add('jump');

    setTimeout(() =>{

        skate.classList.remove('jump');

    }, 500);
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const skatePosition = +window.getComputedStyle(skate).bottom.replace('px', '');



    if(pipePosition <= 120 && pipePosition > 0 && skatePosition < 80){        
        alert(`game over! Seu score foi: ${count}`);
        count = 0;
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        skate.style.animation = 'none';
        //skate.style.bottom = `${skatePosition}px`;

        skate.src = './game-over.png';
        skate.style.width = '85px'
        skate.style.marginLeft = '50px'
        

        clearInterval(loop)

        

        
    }
    
    count++;
    score.innerHTML = `SCORE: ${count}`;
    

    


},10)

document.addEventListener('keydown', jump);