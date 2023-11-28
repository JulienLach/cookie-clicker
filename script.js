const counter = document.getElementById('counter');
const cookie = document.getElementById('cookie');

let clickCount = 0;

cookie.addEventListener('click', function () {
    console.log('Click event triggered!');
    clickCount++;
    counter.textContent = clickCount;
});