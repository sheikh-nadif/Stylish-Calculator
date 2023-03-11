let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let counter = document.getElementById("count");
let count = 14;

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){ 
        
        if(this.innerHTML == "="){
            const result = eval(value.innerHTML);
            const strResult = result.toString()
            value.innerHTML = strResult.substring(0,14);
            count = 14;
            counter.innerHTML = "14";
        }
        else{
            if(this.innerHTML == "Clear"){
                value.innerHTML = "";
                count = 14;
                counter.innerHTML = "14";
            }
            else{
                    if(value.innerHTML.length > 13){
                        value.innerHTML += " ";
                    }
                    else {
                        value.innerHTML += this.innerHTML;

                    count -- ;
                    if (count >= 10){
                        counter.innerHTML = count.toString();  
                    }
                    else if (count >0){
                        counter.innerHTML = `0${count.toString()}`; 
                    }
                    else{
                        counter.innerHTML = "Full";
                    }
                    }
                }
        } 
    })
}



let themeBTN = document.getElementById("theme");
let body = document.querySelector("body");
let iframe = document.querySelector("i");
let theme = iframe.classList.contains('fa-moon-o');
themeBTN.onclick = function (){
    body.classList.toggle('dark-body');
    iframe.classList.toggle('fa-sun-o');
    iframe.classList.toggle('fa-moon-o');
    value.innerHTML = "";
    count = 14;
    counter.innerHTML = "14";
}