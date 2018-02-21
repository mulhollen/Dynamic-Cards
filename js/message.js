"use strict";

let cardMessagesJS = require("./card-messages");

let inputMessage = document.getElementById("card-text");
let container = document.getElementById("container");
let messageCount = 0;

let messageSubmit = function (event) {
    console.log("message.js is here");
    event.preventDefault();

    // place the subbmitted message in array
    let messageArray = cardMessagesJS.messages.unshift(inputMessage.value);
    // display array in the dom
    container.innerHTML += `<div class="msg" id="textbubble"><div class="msg-text" ><p>${cardMessagesJS.messages[0]}</p></div><button class="delete" id="delete">delete</button></div>`;
    // clearing input field
    inputMessage.value = "";
};

module.exports = { messageSubmit };