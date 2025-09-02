let b1 = document.getElementById('b1');
let div1 = document.querySelector('div.d2');
let b2 = document.getElementById('b2');


b1.onclick = function () { alert('boutton click') };

function changeColor() {
    this.style.backgroundColor = 'red';
}

//div1.onmouseover = function () { this.style.backgroundColor = 'red' };
//div1.onmouseout = function () { this.style.backgroundColor = 'white' };

b2.addEventListener('click', function () { alert('bouton click') });
div1.addEventListener('mouseover', changeColor);
div1.addEventListener('mouseout', function () { this.style.backgroundColor = 'white' });
div1.removeEventListener('mouseover', changeColor);
