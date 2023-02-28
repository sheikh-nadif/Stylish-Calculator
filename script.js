let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let counter = document.getElementById("count");
let count = 12;

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){ 
        //if value.length .......
        if(this.innerHTML == "="){
            const result = eval(value.innerHTML);
            const strResult = result.toString()
            value.innerHTML = strResult.substring(0,14);
            count = 12;
            counter.innerHTML = "12";
        }
        else{
            if(this.innerHTML == "Clear"){
                value.innerHTML = "";
                count = 12;
                counter.innerHTML = "12";
            }
            else{
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
        } //If.........
    })
}