//utilisation localstorage
htmlElm = document.querySelector('html');
bgColor = document.getElementById('bgtheme');

if (localStorage.getItem('bgtheme')) {
    updateBg();
} else {
    setBg();
}


function setBg() {
    localStorage.setItem('bgtheme', bgColor.value);
    updateBg();
}

function updateBg() {
    let bg = localStorage.getItem('bgtheme');
    htmlElm.style.background = '#' + bg;
    bgColor.value = bg;
}

bgColor.addEventListener('change', setBg);