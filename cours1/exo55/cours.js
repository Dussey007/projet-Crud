let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 25);
ctx.lineTo(250, 125);
ctx.strokeStyle = '#4488EE'; //Nuance de bleu
ctx.lineWidth = 3;
ctx.stroke();

// ctx.fillRect(x, y, width, height);
// ctx.strokeRect(x, y, width, height);
