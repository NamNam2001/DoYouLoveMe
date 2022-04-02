const btnNo = document.getElementById("no");

const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
btnNo.addEventListener("mouseover",function(){
    btnNo.style.left= getRandom(0, 500)+'px'; // 👈🏼 Horizontally
    btnNo.style.top = getRandom(0, 500)+'px'; // 👈🏼 Vertically

})

function yes(){
    alert("Tớ biết mà <3 !!!");
}