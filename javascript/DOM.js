const elementsToChange = document.querySelectorAll(".js-target");

for (let i = 0; i < elementsToChange.length; i++) {
  const currentElement = elementsToChange[i];
  currentElement.innerText = "ASDASD";
}

const button = document.querySelector(".event-button");

button.addEventListener("click", function () {
  alert("Ayyylmao");
});

/*
    button is grabed with querySelector and stores it in the JavaScript variable button
    addEventListener method is called on thebutton which takes two parameters
        the name of the event to respond to which is click event in this case
        and a function htat is called whenever that even happens.
    this is called a callback since it gets called back whenever the event happens.

    alert is a function that is annoying to pop up a dialog window whenever it is called
*/

//test you input will instantly be reflected in the p tag
const input1 = document.querySelector(".input-to-copy");

const paragraph1 = document.querySelector(".p-to-copy-to");

input1.addEventListener("keyup", function () {
  paragraph1.innerText = input1.value;
});

/*
    keyup event is being used
    happens whenever key is released after being pressed
    input.value is being refereneced since it's the value property of an input reflects whatever user typed into the inptut
*/

const input = document.querySelector(".color-input");
const paragraph = document.querySelector(".color-box");

input.addEventListener("change", function () {
  paragraph.style.backgroundColor = input.value;
});

//Event Delegation

document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    alert(`You clicked on button ${event.target.innerText}`);
  });

//event bubbling is happening
//everything inside the parrent will have the listener event action
//will tell you which button is clicked
