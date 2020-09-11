var d1=6;
var d2=6;
var d3=6;
var d4=6;
var d5=6;
var d6=6;

document.getElementById("roll_button").addEventListener("click", disp_dice);
var D1=document.getElementById("one");
var D2=document.getElementById("two");
var D3=document.getElementById("three");
var D4=document.getElementById("four");
var D5=document.getElementById("five");
var D6=document.getElementById("six");

function disp_dice(){
    d1=getRndInteger(1,6);
    d2=getRndInteger(1,6);
    d3=getRndInteger(1,6);
    d4=getRndInteger(1,6);
    d5=getRndInteger(1,6);
    d6=getRndInteger(1,6);

    D1.textContent=d1;
    D2.textContent=d2;
    D3.textContent=d3;
    D4.textContent=d4;
    D5.textContent=d5;
    D6.textContent=d6;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }