let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");

for(item of btn){
    item.addEventListener('click', (e)=>{
        btntext= e.target.innerText;
        if(btntext=='x'){
            btntext="*";
        }
        if(btntext=="÷"){
            btntext="/"
        }
        screen.value += btntext;
    })
}

function equalto(click, callback){
    screen.value= eval(screen.value);
}

function sin(){
    screen.value = Math.sin(screen.value);
}

function cos(){
    screen.value = Math.cos(screen.value);
}

function tan(){
    screen.value = Math.tan(screen.value);
}

function pow(){
    screen.value = Math.pow(screen.value, 2);
}

function sqrt(){
    screen.value = Math.sqrt(screen.value, 2);
}

function log(){
    screen.value = Math.log(screen.value);
}

function pi(){
    screen.value = 3.1415926536;
}

function perc(){
    let inputValue = screen.value.trim(); 

    
    if (inputValue === '') {
        alert("Please enter a number before calculating the percentage.");
        return; 
    }

    let num = parseFloat(inputValue);

    let result = num / 100;

    screen.value = result;
}

function e(){
    screen.value =2.718281828459045;
}

function fact(){
    var i, num, f;
    f=1;
    num=screen.value;
    for(i=1; i<=num; i++){
        f*=i;
    }

    i=i-1;

    screen.value =f;
}

function back(){
    screen.value = screen.value.substr(0, screen.value.length-1);
}