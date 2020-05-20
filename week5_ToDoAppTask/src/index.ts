let input = document.getElementById("input") as HTMLFormElement | null;
let button = document.getElementById("button") as HTMLButtonElement | null;

if (button == null) {
    window.alert("Button not found");
}
else {
    button.onclick = function () {
        let newElement = document.createElement("p");
        if(input == null){
            window.alert("input value not found");
        }
        else{
            let content = document.createTextNode(input.value);
            newElement.appendChild(content);
        }
       
        let Box = document.getElementById("d2");
        if(Box == null){
           return;
        }
        else{
            Box.appendChild(newElement);
        }
        if(input == null){
            return;
        }
        else{
            input.value = "";
        }
        
        newElement.onclick = function () {
            newElement.remove();
        }
    }

}

console.log("hello World");
