/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

//1.1
let newButton = document.createElement("button");
newButton.id="btnToClick";
newButton.innerText="Pincha aquí!"
document.body.appendChild(newButton);

var handleClick = function(event) {
    console.log(event);
 }
 document.getElementById("btnToClick").addEventListener("click", handleClick);

 //1.2
var handleFocus = function(event){
    console.log(event.target.value)
}
let inputFocus = document.body.querySelector('.focus');
inputFocus.addEventListener("focus",handleFocus);

//1.3
var handleInput = (event) =>   console.log(event.target.value);


let inputEvent = document.body.querySelector('.value');
inputEvent.addEventListener("input",handleInput);