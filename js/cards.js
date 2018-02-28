"use strict";

let messageJS = require("./message");
let funcJS = require("./function");


// on click function
document.getElementById("create").addEventListener("click", messageJS.messageSubmit);
// on click give unique IDs
document.getElementById("create").addEventListener("click", funcJS.msgCount);
