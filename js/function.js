"use strict";

let messageJS = require("./message");
let cardMessagesJS = require("./card-messages");

let messageNum = [];

let num = 1;

let del = "";
let number = "";
let w = "";


let msgCount = function () {
    if (num < 10) {
        number = num.toString();

        w = "textbubble_0" + number;
        del = "delete_0" + number;
    }
    else {
        number = num.toString();

        w = "textbubble_" + number;
        del = "delete_" + number;
    }


    console.log("id", number);

    document.getElementById("textbubble").id = w;
    document.getElementById("delete").id = del;



    num = num + 1;

};

document.querySelector('body').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() === 'button') {

        let bttn = event.target;
        let bttnId = event.target.id;

        if (bttn.className === "delete") {
            let dCompare = bttnId.slice(7, 10);

            let mCompare = ("textbubble_" + dCompare);

            let currentMsg = document.getElementById(mCompare);
            let msgContents = document.getElementById(mCompare).childNodes[0].childNodes[0].innerHTML;

            currentMsg.innerHTML = "";

            let msgArray = cardMessagesJS.messages;

            let m = msgArray.indexOf(msgContents);

            cardMessagesJS.messages.splice(m, 1);
            document.getElementById(mCompare).removeAttribute("class");

        }
    }
});    

module.exports = {msgCount};