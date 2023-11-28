const counter = document.getElementById('counter');
const cookie = document.getElementById('cookie');

let clickCount = 0;

cookie.addEventListener('click', function () {
    clickCount++;
    counter.textContent = clickCount;
});

