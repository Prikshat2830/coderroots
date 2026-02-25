const bulb = document.getElementById('bulb');
const onBtn = document.querySelector('.onBtn');
const offBtn = document.querySelector('.offBtn');
const cat = document.querySelector('.cat');
const ears = cat.querySelectorAll('.ear');
const body = cat.querySelector('.body');
const tail = cat.querySelector('.tail');
const face = cat.querySelector('.face');
const eyes = cat.querySelectorAll('.eye');


function showCat() {
    ears.forEach(e => (e.style.opacity = '1'));
    body.style.opacity = '1';
    tail.style.opacity = '1';
    face.style.backgroundColor = 'white';
}

function hideCatExceptEyes() {
    ears.forEach(e => (e.style.opacity = '0'));
    body.style.opacity = '0';
    tail.style.opacity = '0';
    face.style.backgroundColor = 'transparent';
}

function hideEyes() {
    eyes.forEach(e => (e.style.backgroundColor = 'black'));
}

function showEyes() {
    eyes.forEach(e => (e.style.backgroundColor = 'yellow'));
}

function turnOn() {
    bulb.style.backgroundColor = 'yellow'
    bulb.style.boxShadow = '0 0 20px yellow'
    onBtn.style.backgroundColor = 'yellow'
    onBtn.style.fontWeight = 'bold'
    offBtn.style.backgroundColor = 'white';
    offBtn.style.fontWeight = 'normal';
    showCat();
    hideEyes();
}

function turnOff() {
    bulb.style.backgroundColor = 'white';
    bulb.style.boxShadow = 'none';
    offBtn.style.backgroundColor = 'yellow';
    offBtn.style.fontWeight = 'bold';
    onBtn.style.backgroundColor = 'white'
    onBtn.style.fontWeight = 'normal'
    hideCatExceptEyes();
    showEyes();
}

onBtn.addEventListener('click', turnOn);
offBtn.addEventListener('click', turnOff);

turnOff();
