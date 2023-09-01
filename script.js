const form = document.getElementById('form');
let botao = document.getElementById('button');
let campoA = document.getElementById('valor1');
let campoB = document.getElementById('valor2');
let msg_sucess = document.querySelector('.msg-sucess');

form.addEventListener('submit', function(e) {

    let formValido = false;
    e.preventDefault();

    if(campoB.value > campoA.value){
        formValido = true;
    }else if(campoB.value == campoA.value){
        msg_sucess.innerHTML = "Ops, Os valores são iguais";
        msg_sucess.style.display = "flex";
        msg_sucess.style.backgroundColor = "rgb(209, 39, 39)";
    }else{
        msg_sucess.innerHTML = "Ops, O valor do Campo A é maior que o do Campo B";
        msg_sucess.style.display = "flex";
        msg_sucess.style.backgroundColor = "rgb(209, 39, 39)";
    }

    if(formValido){
        msg_sucess.innerHTML = "Parabéns os valores estão corretos";
        msg_sucess.style.display = "flex";
        msg_sucess.style.backgroundColor = "rgb(27, 206, 27)";
        campoA.value = " ";
        campoB.value = " ";
    }
})
