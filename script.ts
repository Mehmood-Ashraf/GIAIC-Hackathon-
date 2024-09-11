
const btn1 = document.getElementById('btn1') as HTMLButtonElement;
const display1 = document.getElementById('edu-section') as HTMLElement;

btn1.addEventListener('click', () => {
    if(display1.style.display === 'none'){
        display1.style.display = 'block'
    }else{
        display1.style.display = 'none'
    }
});


const btn3 = document.getElementById('btn3') as HTMLButtonElement;
const display2 = document.getElementById('exp-section') as HTMLElement;

btn3.addEventListener('click', () => {
    if(display2.style.display === 'none'){
        display2.style.display = 'block'
    }else{
        display2.style.display = 'none'
    }
});


const btn4 = document.getElementById('btn4') as HTMLButtonElement;
const display3 = document.getElementById('skl-section') as HTMLElement;

btn4.addEventListener('click', () => {
    if(display3.style.display === 'none'){
        display3.style.display = 'block'
    }else{
        display3.style.display = 'none'
    }
});