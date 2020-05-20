"use strict";
var input = document.getElementById("input");
var button = document.getElementById("button");
if (button == null) {
    window.alert("Button not found");
}
else {
    button.onclick = function () {
        var newElement = document.createElement("p");
        if (input == null) {
            window.alert("input value not found");
        }
        else {
            var content = document.createTextNode(input.value);
            newElement.appendChild(content);
        }
        var Box = document.getElementById("d2");
        if (Box == null) {
            return;
        }
        else {
            Box.appendChild(newElement);
        }
        if (input == null) {
            return;
        }
        else {
            input.value = "";
        }
        newElement.onclick = function () {
            newElement.remove();
        };
    };
}
console.log("hello World");
