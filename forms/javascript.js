const input = document.getElementById("input");
const btns = document.querySelectorAll(".btn button");
let display = "";
//add event listner 
btns.forEach(element => {
    element.addEventListener('click',()=>{
        const value = element.innerText;  
        if (value==='='){
            try {
                display = eval(display);
                input.value=display;
            } catch (error) {
                input.value="error";
              display="";
            }
        }
        else if (value==='%'){
            input.value="";
            display="";
        }
        else{
            display +=value;
            input.value=display;
        }
    })
    
});