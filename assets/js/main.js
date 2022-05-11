let body = document.getElementById('body');

function generate() {
    let r = Math.floor(Math.random() * 257);
    let g = Math.floor(Math.random() * 257);
    let b = Math.floor(Math.random() * 257);
    console.log(r);
    console.log(g);
    console.log(b);
    document.body.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
}
