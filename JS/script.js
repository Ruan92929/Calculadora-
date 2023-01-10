
function insert(num){
    document.querySelector('.tela').innerHTML += num;
}

function calcular(){

    let calc = document.querySelector('.tela').innerHTML 
    if (calc){
        document.querySelector('.tela').innerHTML = eval(calc);
    }
}

function limpar(){
    document.querySelector('.tela').innerHTML = "";
}

function apagar(){
    let display = document.querySelector('.tela').innerHTML 
    document.querySelector('.tela').innerHTML = display.substring(0, display.length -1)
}
