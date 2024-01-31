"use strict"

let displayBox = document.querySelector("#result");

let inputs = document.querySelectorAll(".btn");



let string = "";

Array.from(inputs).forEach((button)=>{
    button.addEventListener("click", function(btn){
    if(btn.target.value == "="){
         try{
            string = eval(string)
            displayBox.value = string;
        }catch(error){
            string = new Error("Invalid Value")
        }
    }else if(btn.target.value == "C"){
        string = "";
        displayBox.value = string;
    }else if(btn.target.value == "x"){
        string = string + "*";
        displayBox.value = string;
    }else if(btn.target.value === "+/-"){
        string = (parseFloat(string) * -1).toString();
    }else if(btn.target.value =="DEL"){
        string = string.slice(0, -1);
        displayBox.value = string;
    }else if(displayBox.value == "Error: Invalid Value"){
        string = ""; 
        string = string + btn.target.value;
        displayBox.value = string;
    }else{
        string = string + btn.target.value;
        displayBox.value = string;
    }



    })
})