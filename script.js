const  button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['violet','indigo','blue','green','yellow'];
body.style.background='pink';
document.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    document.getElementById("ans").innerHTML=colorIndex
    body.style.backgroundColor=color[colorIndex];
    // document.write(colorIndex);
    // body.style.backgroundColor=color[colorIndex];
});