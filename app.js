
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(function () {
        console.log("Service Worker Registered!");
    });
}

window.onload = function() {
    const label = document.querySelector("h1 span");
    const btn = document.querySelector("button");
    let myNum = localStorage.getItem('myNumber');

    if( myNum === null ) myNum = 0;
    label.innerHTML = myNum;
    
    btn.onclick = function() {
        myNum++;
        label.innerHTML = myNum;
        localStorage.setItem('myNumber', myNum);
    }
}