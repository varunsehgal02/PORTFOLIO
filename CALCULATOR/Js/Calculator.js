const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick =() =>{
        if(item.id == 'clear'){
            display.innerText ='';
        }else if(item.id == 'back'){
            let string =display.innerText.toString();
            display.innerText=string.substr(0,string.lenght - 1);
        }else if(display.innerText != '' && item.id == 'equal'){
            display.innerText= eval(display.innerText)
        }else if(display.innerText== '' && item.id =='equal'){
            display.innerText='Empty!';
            setTimeout(()=> (display.innerText =''),2000);
        }else{
            display.innerText+=item.id
        }
    }
})
const theme = document.querySelector('.theme');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.t-icon');
let isDark =true;
theme.onclick = () => {
    calculator.classList.toggle('dark');
    theme.classList.toggle('active');
    isDark =! isDark;
}

