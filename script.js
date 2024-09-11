var btn1 = document.getElementById('btn1');
var display1 = document.getElementById('edu-section');
btn1.addEventListener('click', function () {
    if (display1.style.display === 'none') {
        display1.style.display = 'block';
    }
    else {
        display1.style.display = 'none';
    }
});
var btn3 = document.getElementById('btn3');
var display2 = document.getElementById('exp-section');
btn3.addEventListener('click', function () {
    if (display2.style.display === 'none') {
        display2.style.display = 'block';
    }
    else {
        display2.style.display = 'none';
    }
});
var btn4 = document.getElementById('btn4');
var display3 = document.getElementById('skl-section');
btn4.addEventListener('click', function () {
    if (display3.style.display === 'none') {
        display3.style.display = 'block';
    }
    else {
        display3.style.display = 'none';
    }
});
