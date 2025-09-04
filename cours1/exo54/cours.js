//canvas utilisation
let canvas = document.getElementById('c1');

let ctx = canvas.getContext('2d');

ctx.strokeStyle = '#9c5504ff';
ctx.strokeRect(30, 65, 50, 100);
ctx.fillStyle = '#DDDD44';
ctx.fillRect(50, 25, 50, 10);

ctx.fillStyle = '#4444CC';
ctx.fillRect(20, 25, 20, 60);

ctx.strokeStyle = 'purple';
ctx.strokeRect(60, 75, 20, 10);

// ctx.strokeRect(350, 175, 200, 100);