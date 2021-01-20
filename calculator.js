function btnPrsd(x){
    var display = document.getElementById('display')
    if(display.innerText == 'undefined')
        display.innerText = x
    else
        display.innerText += x
}

function calculate(){
    display.innerText = eval(display.innerText)
}

function clr(){
    display.innerHTML = '';
}

function del(){
    if (display.innerText == 'undefined'){
        clr()
    }
    else{
        display.innerText = display.innerText.slice(0, display.innerText.length - 1)
    }
}