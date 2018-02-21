"use strict";

let messageJS = require("./message");
let cardMessagesJS = require("./card-messages");

let messageNum = [];

let num = 1;

let d = "";
let n = "";
let w = "";


// on enter keypress
let enter = function (event) {
    console.log("func js and enter are here");
    if (event.keycode === 13) {
        messageJS.messageSubmit();
    }
};

// let msgCount = function () {
//     if (num < 10) {
//         n = num.toString();

//         w = "textbubble_0" + n;
//         d = "delete_0" + n;
//     }
//     else {
//         n = num.toString();

//         w = "textbubble_" + n;
//         d = "delete_" + n;
//     }


//     console.log("id", n);

//     document.getElementById("textbubble").id = w;
//     document.getElementById("delete").id = d;



//     num = num + 1;

// };

// document.querySelector('body').addEventListener('click', function (event) {
//     if (event.target.tagName.toLowerCase() === 'button') {

//         let bttn = event.target;
//         let bttnId = event.target.id;

//         if (bttn.className === "delete" || bttn.className === "deleteDark" || bttn.className === "delete-lg") {
//             let dCompare = bttnId.slice(7, 10);

//             let mCompare = ("textbubble_" + dCompare);

//             let currentMsg = document.getElementById(mCompare);
//             let msgContents = document.getElementById(mCompare).childNodes[0].childNodes[0].innerHTML;

//             currentMsg.innerHTML = "";

//             let msgArray = cardMessagesJS.messages;

//             let m = msgArray.indexOf(msgContents);

//             cardMessagesJS.messages.splice(m, 1);
//             document.getElementById(mCompare).removeAttribute("class");

//         }
//     }
// });    

module.exports = {enter};